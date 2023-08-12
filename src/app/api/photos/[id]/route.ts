import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler }          from "@api/withErrorHandler";
import { prisma }                    from "@utils/prisma";
import { cloudinary }                from "@utils/cloudinary";

interface Params {
  id: string;
}

export const DELETE = withErrorHandler(async (request: NextRequest, { params }: { params: Params }) => {
  const photo = await prisma.photo.delete({ where: { id: params.id } });
  await cloudinary.v2.uploader.destroy(photo.publicId);
  return NextResponse.json({});
});