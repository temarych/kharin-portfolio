import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter }          from "next-connect";
import createHttpError               from "http-errors";
import { JsonWebTokenError }         from "jsonwebtoken";
import { errorHandler }              from "@api/errorHandler";
import { jwt }                       from "@utils/jwt";
import { prisma }                    from "@utils/prisma";
import { Profile }                   from "@typings/user";

export type RequestContext = {};

const router = createEdgeRouter<NextRequest, RequestContext>();

router.use(async (request, response, next) => {
  return next().catch(errorHandler);
});

router.get(async request => {
  try {
    const accessToken = request.cookies.get("accessToken")?.value ?? null;
  
    if (!accessToken) {
      throw new createHttpError.Unauthorized("No access token provided");
    }

    const { id } = jwt.verifyToken(accessToken);
    const user   = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new createHttpError.Unauthorized("No user found");
    }

    const profile  = new Profile(user);
    const response = NextResponse.json({ ...profile });

    return response;

  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      throw new createHttpError.Unauthorized("Invalid access token");
    }
    throw error;
  }
});

export const GET = async (request: NextRequest, ctx: RequestContext) => {
  return router.run(request, ctx);
};