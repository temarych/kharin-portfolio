import { NextRequest, NextResponse } from "next/server";
import { ZodError, z }               from "zod";
import createHttpError               from "http-errors";
import { withErrorHandler }          from "@api/withErrorHandler";
import { prisma }                    from "@utils/prisma";
import { jwt }                       from "@utils/jwt";
import { Profile }                   from "@typings/user";

const requestBodySchema = z.object({
  email   : z.string().nonempty(),
  password: z.string().nonempty()
});

export const POST = withErrorHandler(async (request: NextRequest) => {
  try {
    const { email, password } = requestBodySchema.parse(await request.json());
    const user                = await prisma.user.findFirst({ where: { email } });

    if (!user || user.password !== password) {
      throw new createHttpError.Unauthorized("Incorrect email or password");
    }

    const profile      = new Profile(user);
    const response     = NextResponse.json({ ...profile });
    const accessToken  = jwt.createAccessToken({ id: user.id });

    response.cookies.set("accessToken", accessToken);

    return response;

  } catch (error) {
    if (error instanceof ZodError) {
      throw new createHttpError.BadRequest("Invalid credentials");
    }
    throw error;
  }
});