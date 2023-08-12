import { NextRequest, NextResponse } from "next/server";
import createHttpError               from "http-errors";
import { JsonWebTokenError }         from "jsonwebtoken";
import { jwt }                       from "@utils/jwt";

export type NextRoute = (request: NextRequest, ...args: any[]) => Promise<NextResponse>;

export const withAuth = (route: NextRoute): NextRoute => {
  return async (request, ...args) => {
    try {
      const accessToken = request.cookies.get("accessToken")?.value ?? null;

      if (!accessToken) {
        throw new createHttpError.Unauthorized("No access token provided");
      }

      jwt.verifyToken(accessToken);

      return await route(request, ...args);

    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new createHttpError.Unauthorized("Invalid access token");
      }
      throw error;
    }
  };
};