import { User as PrismaUser } from "@prisma/client";

export type IProfile = Omit<PrismaUser, "password">;

export class Profile implements IProfile {
  public id       : string;
  public email    : string;
  public firstName: string;
  public lastName : string;

  constructor(profile: IProfile) {
    this.id        = profile.id;
    this.email     = profile.email;
    this.firstName = profile.firstName;
    this.lastName  = profile.lastName;
  }
}