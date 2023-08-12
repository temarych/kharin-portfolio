"use client";

import Image     from "next/image";
import { Photo } from "./PickPhoto";

export interface PhotoPreviewProps {
  photo: Photo;
}

export const PhotoPreview = ({ photo }: PhotoPreviewProps) => {
  return (
    <div className="relative rounded-xl bg-gray-50 aspect-[0.75] w-full overflow-hidden">
      <Image
        fill
        src       = {photo.url}
        alt       = "preview"
        sizes     = "33vw"
        className = "object-cover"
      />
    </div>
  );
};