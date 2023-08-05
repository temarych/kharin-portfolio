"use server";

import { User }   from "@prisma/client";
import { prisma } from "@utils/prisma";

export const createUser = async (data: Omit<User, "id">) => {
  return await prisma.user.create({ data });
};