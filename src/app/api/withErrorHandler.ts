import { NextRequest, NextResponse } from "next/server";
import createHttpError               from "http-errors";

export type NextRoute = (request: NextRequest, ...args: any[]) => Promise<NextResponse>;

export const withErrorHandler = (route: NextRoute): NextRoute => {
  return async (request, ...args) => {
    try {
      return await route(request, ...args);
    } catch (error) {
      if (createHttpError.isHttpError(error)) {
        return NextResponse.json({ message: error.message }, { status: error.status });
      }
      console.error(error);
      return NextResponse.json({ message: "An internal server error occurred" }, { status: 500 });
    }
  };
};