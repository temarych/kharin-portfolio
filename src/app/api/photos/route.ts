import { NextRequest, NextResponse }                from "next/server";
import { UploadApiOptions, UploadResponseCallback } from "cloudinary";
import { withErrorHandler }                         from "@api/withErrorHandler";
import { cloudinary }                               from "@utils/cloudinary";
import { prisma }                                   from "@utils/prisma";
import { Photo }                                    from "@typings/photos";

const uploadFile = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer      = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const uploadOptions: UploadApiOptions = { 
      resource_type: "image" 
    };

    const handleUpload: UploadResponseCallback = (error, result) => {
      if (error) return reject(error);
      return resolve(result?.public_id as string);
    };

    cloudinary.v2.uploader
      .upload_stream(uploadOptions, handleUpload)
      .end(buffer);
  });
};

export const POST = withErrorHandler(async (request: NextRequest) => {
  const formData = await request.formData();
  const file     = formData.get("photo") as File;
  const publicId = await uploadFile(file);
  const dbPhoto  = await prisma.photo.create({ data: { publicId } });
  const photoUrl = cloudinary.v2.url(publicId);
  const photo    = new Photo({ ...dbPhoto, url: photoUrl });
  return NextResponse.json({ ...photo });
});

export const GET = withErrorHandler(async () => {
  const dbPhotos = await prisma.photo.findMany({ take: 20 });

  const photos = dbPhotos.map(photo => {
    const photoUrl = cloudinary.v2.url(photo.publicId);
    return new Photo({ ...photo, url: photoUrl });
  });

  return NextResponse.json({ photos });
});