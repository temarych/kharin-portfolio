import { Photo as DbPhoto } from "@prisma/client";

export type IPhoto = Omit<DbPhoto, "publicId"> & { url: string };

export class Photo implements IPhoto {
  public id : string;
  public url: string;

  constructor(photo: IPhoto) {
    this.id  = photo.id;
    this.url = photo.url;
  }
}