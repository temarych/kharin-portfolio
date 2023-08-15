import { Photo as DbPhoto } from "@prisma/client";

export interface IPhoto extends Omit<DbPhoto, "publicId"> {
  url: string;
}

export class Photo implements IPhoto {
  public id        : string;
  public url       : string;
  public width     : number;
  public height    : number;
  public size      : number;
  public format    : string;
  public uploadDate: Date;

  constructor(photo: IPhoto) {
    this.id         = photo.id;
    this.url        = photo.url;
    this.width      = photo.width;
    this.height     = photo.height;
    this.size       = photo.size;
    this.format     = photo.format;
    this.uploadDate = photo.uploadDate;
  }
}

export type IPhotoPreview = Pick<IPhoto, "id" | "url">;

export class PhotoPreview implements IPhotoPreview {
  public id : string;
  public url: string;

  constructor(photoPreview: IPhotoPreview) {
    this.id  = photoPreview.id;
    this.url = photoPreview.url;
  }
}