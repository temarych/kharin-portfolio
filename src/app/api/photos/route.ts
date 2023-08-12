import { NextRequest, NextResponse }                from "next/server";
import { UploadApiOptions, UploadResponseCallback } from "cloudinary";
import { withErrorHandler }                         from "@api/withErrorHandler";
import { cloudinary }                               from "@utils/cloudinary";
import { prisma }                                   from "@utils/prisma";

const uploadFile = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer      = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const uploadOptions: UploadApiOptions = { 
      resource_type: "image" 
    };

    const handleUpload: UploadResponseCallback = (error, result) => {
      if (error) return reject(error);
      return resolve(result?.url as string);
    };

    cloudinary.v2.uploader
      .upload_stream(uploadOptions, handleUpload)
      .end(buffer);
  });
};

export const POST = withErrorHandler(async (request: NextRequest) => {
  const formData = await request.formData();
  const file     = formData.get("photo") as File;
  const photoURL = await uploadFile(file);
  const photo    = await prisma.photo.create({ data: { url: photoURL } });
  return NextResponse.json({ ...photo });
});

export const GET = withErrorHandler(async () => {
  const photos = await prisma.photo.findMany({ take: 20 });
  return NextResponse.json({ photos });
});