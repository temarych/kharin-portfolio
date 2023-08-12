"use client";

import { Photo }       from "./PickPhoto";
import { PhotoDetail } from "./PhotoDetail";

export interface PhotoDetailsProps {
  photo: Photo;
}

export const PhotoDetails = ({ photo }: PhotoDetailsProps) => {  
  return (
    <div className="grid grid-cols-2 gap-8 border rounded-xl p-6">
      <PhotoDetail 
        name  = "Size"
        value = {`${(photo.file.size / 1000).toFixed()} KB`}
      />
      <PhotoDetail 
        name  = "Last modified"
        value = {Intl.DateTimeFormat().format(new Date(photo.file.lastModified))}
      />
      <PhotoDetail 
        name  = "Resolution"
        value = {`${photo.size.width}x${photo.size.height}`}
      />
      <PhotoDetail 
        name  = "Type"
        value = {photo.file.type}
      />
    </div>
  );
};