import { NextRequest, NextResponse } from "next/server";
import createHttpError               from "http-errors";
import { withErrorHandler }          from "@api/withErrorHandler";
import { withAuth }                  from "@api/withAuth";
import { prisma }                    from "@utils/prisma";
import { cloudinary }                from "@utils/cloudinary";
import { Photo }                     from "@typings/photos";
import { CollectionPreview }         from "@typings/collections";

interface Params {
  id: string;
}

export const DELETE = withErrorHandler(withAuth(async (request: NextRequest, { params }: { params: Params }) => {
  const photo = await prisma.photo.delete({ where: { id: params.id } });
  await cloudinary.v2.uploader.destroy(photo.publicId);
  return NextResponse.json({});
}));

export const GET = withErrorHandler(async (request: NextRequest, { params }: { params: Params }) => {
  if (params.id.length !== 24) {
    throw new createHttpError.BadRequest("Invalid photo id");
  } 
  
  const dbPhoto = await prisma.photo.findFirst({ 
    where  : { id: params.id },
    include: { collections: true }
  });

  if (!dbPhoto) {
    throw new createHttpError.NotFound("Photo not found");
  }

  const photoUrl    = cloudinary.v2.url(dbPhoto.publicId);
  const collections = dbPhoto.collections.map(collection => new CollectionPreview(collection));
  const photo       = new Photo({ ...dbPhoto, url: photoUrl, collections });

  return NextResponse.json({ ...photo });
});