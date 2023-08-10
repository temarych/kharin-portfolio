import { NextResponse } from "next/server";
import createHttpError  from "http-errors";

export const errorHandler = (error: unknown): NextResponse => {
  if (createHttpError.isHttpError(error)) {
    return NextResponse.json({ message: error.message }, { status: error.status });
  }
  console.error(error);
  return NextResponse.json({ message: "An internal server error occurred" }, { status: 500 });
};