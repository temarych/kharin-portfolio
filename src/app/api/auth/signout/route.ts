import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter }          from "next-connect";
import { errorHandler }              from "@api/errorHandler";

export type RequestContext = {};

const router = createEdgeRouter<NextRequest, RequestContext>();

router.use(async (request, response, next) => {
  return next().catch(errorHandler);
});

router.post(async () => {
  const response = NextResponse.json({});
  response.cookies.delete("accessToken");
  return response;
});

export const POST = async (request: NextRequest, ctx: RequestContext) => {
  return router.run(request, ctx);
};