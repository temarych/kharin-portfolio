"use server";

import { Role, User } from "@typings/user";
import { prisma }     from "./prisma";

export const getUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) return null;

  return {
    id       : user.id,
    email    : user.email,
    firstName: user.firstName,
    lastName : user.lastName,
    role     : user.role as Role
  };
};

export const updateUser = async (id: string, data: Partial<Omit<User, "id">>): Promise<User> => {
  const user = await prisma.user.update({ where: { id }, data });

  return {
    id       : user.id,
    email    : user.email,
    firstName: user.firstName,
    lastName : user.lastName,
    role     : user.role as Role
  };
};

export const getAdmins = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({ 
    where: { 
      role: { equals: "admin" }
    } 
  });
  return users.map(user => ({
    id       : user.id,
    email    : user.email,
    firstName: user.firstName,
    lastName : user.lastName,
    role     : user.role as Role
  }));
};