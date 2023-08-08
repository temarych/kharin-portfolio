import { User as PrismaUser } from "@prisma/client";

export type Role = "owner" | "admin";

export type User = Omit<PrismaUser, "password" | "role"> & {
  role: Role;
};