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
      <div className="max-w-[60em] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 py-8">
        <PhotoPreview photo={photo} />
        <div className="flex flex-col justify-between gap-16 md:gap-8 md:py-8">
          <PhotoDetails photo={photo} />
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <Button variant="outlined" className="w-full" onClick={onRemove}>Discard</Button>
            <Button className="w-full">Add photo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};