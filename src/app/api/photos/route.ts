import { NextRequest, NextResponse }                from "next/server";
import createHttpError                              from "http-errors";
import { UploadApiOptions, UploadResponseCallback } from "cloudinary";
import { withErrorHandler }                         from "@api/withErrorHandler";
import { withAuth }                                 from "@api/withAuth";
import { cloudinary }                               from "@utils/cloudinary";
import { prisma }                                   from "@utils/prisma";
import { Photo, PhotoPreview }                      from "@typings/photos";
import { CollectionPreview }                        from "@typings/collections";

interface FileInfo {
  publicId: string;
  width   : number;
  height  : number;
  format  : string;
  size    : number;
}

const uploadFile = async (file: File): Promise<FileInfo> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer      = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const uploadOptions: UploadApiOptions = { 
      resource_type: "image" 
    };

    const handleUpload: UploadResponseCallback = (error, result) => {
      if (error) return reject(error);
      if (!result) return;
      return resolve({
        publicId: result.public_id,
        width   : result.width,
        height  : result.height,
        format  : result.format,
        size    : result.bytes
      });
    };

    cloudinary.v2.uploader
      .upload_stream(uploadOptions, handleUpload)
      .end(buffer);
  });
};

export const POST = withErrorHandler(withAuth(async (request: NextRequest) => {
  const uploadDate = new Date();
  const formData   = await request.formData();
  const file       = formData.get("photo") as File;

  const fileInfo = await uploadFile(file);

  const dbPhoto = await prisma.photo.create({ 
    data   : { ...fileInfo, uploadDate },
    include: { collections: true }
  });

  const url         = cloudinary.v2.url(dbPhoto.publicId);
  const collections = dbPhoto.collections.map(collection => new CollectionPreview(collection));
  const photo       = new Photo({ ...dbPhoto, url, collections });

  return NextResponse.json({ ...photo });
}));

export const GET = withErrorHandler(async (request: NextRequest) => {
  const limit     = 8;
  const pageQuery = request.nextUrl.searchParams.get("page");
  const page      = pageQuery ? Number(pageQuery) : null;

  if (page === null) {
    throw new createHttpError.BadRequest("Page not provided");
  }

  if (page <= 0) {
    throw new createHttpError.BadRequest("Invalid page index");
  }

  const photoCount = await prisma.photo.count();
  const pages      = Math.ceil(photoCount / limit);

  if (!pages) {
    return NextResponse.json({ page, pages, limit, photos: [] });
  }

  if (page > pages) {
    throw new createHttpError.BadRequest("Invalid page index");
  }

  const dbPhotos = await prisma.photo.findMany({ 
    skip   : (page - 1) * limit, 
    take   : limit,
    orderBy: [{ uploadDate: "desc" }]
  });

  const photos = dbPhotos.map(photo => {
    const url = cloudinary.v2.url(photo.publicId);
    return new PhotoPreview({ ...photo, url });
  });

  return NextResponse.json({ page, pages, limit, photos });
});