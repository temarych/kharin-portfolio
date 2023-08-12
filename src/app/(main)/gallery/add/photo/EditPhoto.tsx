"use client";

import { Button }       from "@components/Button";
import { PhotoDetails } from "./PhotoDetails";
import { Photo }        from "./PickPhoto";
import { PhotoPreview } from "./PhotoPreview";

export interface EditPhotoProps {
  photo   : Photo;
  onRemove: () => void;
}

export const EditPhoto = ({ photo, onRemove }: EditPhotoProps) => {
  return (
    <section className="flex flex-col items-center pt-16 px-4 md:px-8">
      <div className="max-w-[60em] w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 py-8">
        <PhotoPreview photo={photo} onRemove={onRemove} />
        <div className="flex flex-col justify-between gap-12">
          <div className="px-4 md:px-0">
            <PhotoDetails photo={photo} />
          </div>
          <div className="flex flex-row items-center justify-end">
            <Button className="w-full md:w-1/2">Add photo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};