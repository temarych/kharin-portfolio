"use client";

import Image            from "next/image";
import { HiX }          from "react-icons/hi";
import { Input }        from "@components/Input";
import { IconButton }   from "@components/IconButton";
import { PhotoDetails } from "./PhotoDetails";
import { Photo }        from "./PickPhoto";

export interface EditPhotoProps {
  photo   : Photo;
  onRemove: () => void;
}

export const EditPhoto = ({ photo, onRemove }: EditPhotoProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-12 max-w-[60em] w-full">
        <div className="flex flex-col items-end">
          <div className="relative rounded-xl bg-gray-50 aspect-[3/4] w-full overflow-hidden">
            <Image 
              fill
              src       = {photo.url}
              alt       = "preview"
              sizes     = "33vw"
              className = "object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-start p-4">
              <div className="rounded-full bg-white">
                <IconButton onClick={onRemove}>
                  <HiX className="text-3xl" />
                </IconButton>
              </div>
            </div>
          </div>
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