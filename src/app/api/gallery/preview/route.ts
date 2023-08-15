import { NextResponse }     from "next/server";
import { withErrorHandler } from "@api/withErrorHandler";
import { prisma }           from "@utils/prisma";
import { cloudinary }       from "@utils/cloudinary";
import { Photo }            from "@typings/photos";

export const GET = withErrorHandler(async () => {
  const dbPhotos = await prisma.photo.findMany({ take: 6 });

  const photos = dbPhotos.map(dbPhoto => {
    const url   = cloudinary.v2.url(dbPhoto.publicId);
    const photo = new Photo({ ...dbPhoto, url });
    return { ...photo };
  });

  return NextResponse.json({ photos });
});