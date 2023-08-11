import { NextResponse }     from "next/server";
import { withErrorHandler } from "@app/api/withErrorHandler";

export const POST = withErrorHandler(async () => {
  const response = NextResponse.json({});
  response.cookies.delete("accessToken");
  return response;
});