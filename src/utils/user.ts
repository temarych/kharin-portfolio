"use server";

import { User }   from "@typings/user";
import { prisma } from "./prisma";

export const getUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) return null;

  return {
    id       : user.id,
    email    : user.email,
    firstName: user.firstName,
    lastName : user.lastName
  };
};