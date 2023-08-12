import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler }          from "@api/withErrorHandler";
import { prisma }                    from "@utils/prisma";

interface Params {
  id: string;
}

export const DELETE = withErrorHandler(async (request: NextRequest, { params }: { params: Params }) => {
  await prisma.photo.delete({ where: { id: params.id } });
  return NextResponse.json({});
});