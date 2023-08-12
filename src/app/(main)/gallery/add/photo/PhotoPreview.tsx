"use client";

import Image          from "next/image";
import { HiX }        from "react-icons/hi";
import { IconButton } from "@components/IconButton";
import { Photo }      from "./PickPhoto";

export interface PhotoPreviewProps {
  photo   : Photo;
  onRemove: () => void;
}

export const PhotoPreview = ({ photo, onRemove }: PhotoPreviewProps) => {
  return (
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
  );
};