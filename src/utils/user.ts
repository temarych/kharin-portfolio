"use server";

import { prisma } from "./prisma";

export const getUser = (email: string) => {
  return prisma.user.findFirst({ where: { email } });
};