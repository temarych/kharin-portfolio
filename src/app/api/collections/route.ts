import { NextRequest, NextResponse }     from "next/server";
import { z }                             from "zod";
import { withAuth }                      from "@api/withAuth";
import { withErrorHandler }              from "@api/withErrorHandler";
import { prisma }                        from "@utils/prisma";
import { cloudinary }                    from "@utils/cloudinary";
import { Collection, CollectionPreview } from "@typings/collections";
import { PhotoPreview }                  from "@typings/photos";

const requestBodySchema = z.object({
  name  : z.string(),
  photos: z.array(z.string())
});

export const POST = withErrorHandler(withAuth(async (request: NextRequest) => {
  const { name, photos: photoIds } = requestBodySchema.parse(await request.json());

  const dbCollection = await prisma.collection.create({ 
    data   : { name, photoIds, type: "custom" },
    include: { photos: true }
  });

  const collection = new Collection({ 
    ...dbCollection,
    photos: dbCollection.photos.map(dbPhoto => {
      const url   = cloudinary.v2.url(dbPhoto.publicId);
      const photo = new PhotoPreview({ ...dbPhoto, url });
      return { ...photo };
    })
  });

  const response = NextResponse.json({ ...collection });

  return response;
}));

export const GET = withErrorHandler(async (request: NextRequest) => {
  const dbCollections = await prisma.collection.findMany({ take: 10 });

  const collections = dbCollections.map(dbCollection => {
    const collection = new CollectionPreview(dbCollection);
    return { ...collection };
  });

  const response = NextResponse.json({ collections });

  return response;
});