"use client";

import Image             from "next/image";
import { Button }        from "@components/Button";
import { LoadingButton } from "@components/LoadingButton";
import { Photo }         from "./PickPhoto";
import { PhotoDetail }   from "../../PhotoDetail";

export interface ViewPhotoProps {
  photo      : Photo;
  onRemove   : () => void;
  onUpload   : () => void;
  isUploading: boolean;
}

export const ViewPhoto = ({ photo, onRemove, onUpload, isUploading }: ViewPhotoProps) => {
  return (
    <section className="flex flex-col items-center px-4 md:px-8 pt-16">
      <div className="max-w-[80em] w-full py-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
        <div className="relative rounded-xl bg-gray-50 aspect-[0.75] w-full overflow-hidden">
          <Image
            fill
            src       = {photo.url}
            alt       = "preview"
            sizes     = "33vw"
            className = "object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 gap-8 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 border rounded-xl p-6 md:p-8">
            <PhotoDetail
              name  = "Size"
              value = {`${(photo.file.size / 1000).toFixed()} KB`}
            />
            <PhotoDetail 
              name  = "Resolution"
              value = {`${photo.size.width}x${photo.size.height}`}
            />
            <PhotoDetail 
              name  = "Format"
              value = {photo.file.type}
            />
            <PhotoDetail 
              name  = "Last modified"
              value = {Intl.DateTimeFormat().format(new Date(photo.file.lastModified))}
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <Button 
              disabled  = {isUploading}
              variant   = "outlined" 
              className = "w-full" 
              onClick   = {onRemove}
            >
              Discard
            </Button>
            <LoadingButton 
              disabled  = {isUploading}
              isLoading = {isUploading}
              className = "w-full" 
              onClick   = {onUpload}
            >
              Add photo
            </LoadingButton>
          </div>
        </div>
      </div>
    </section>
  );
};