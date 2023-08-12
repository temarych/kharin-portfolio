"use client";

import Image            from "next/image";
import { Input }        from "@components/Input";
import { PhotoDetails } from "./PhotoDetails";
import { Photo }        from "./PickPhoto";

export interface EditPhotoProps {
  photo: Photo;
}

export const EditPhoto = ({ photo }: EditPhotoProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-8 max-w-[60em]">
        <div className="flex flex-col items-end">
          <Image 
            src       = {photo.url}
            alt       = "preview"
            width     = {500}
            height    = {500}
            className = "rounded-xl aspect-[3/4] object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-12 py-12">
          <PhotoDetails photo={photo} />
          <div className="flex flex-col gap-4">
            <Input placeholder="Title" />
            <Input placeholder="Location" />
            <Input placeholder="Description" />
          </div>
        </div>
      </div>
    </div>
  );
};