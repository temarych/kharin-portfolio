import { Collection as PrismaCollection } from "@prisma/client";
import { IPhotoPreview }                  from "./photos";

export interface ICollection extends Omit<PrismaCollection, "type" | "photoIds"> {
  photos: IPhotoPreview[];
}

export class Collection implements ICollection {
  public id    : string;
  public name  : string;
  public photos: IPhotoPreview[];

  constructor(collection: ICollection) {
    this.id     = collection.id;
    this.name   = collection.name;
    this.photos = collection.photos;
  }
}

export type ICollectionPreview = Pick<ICollection, "name" | "id">;

export class CollectionPreview implements ICollectionPreview {
  public id  : string;
  public name: string;

  constructor(collection: ICollectionPreview) {
    this.id   = collection.id;
    this.name = collection.name;
  }
}