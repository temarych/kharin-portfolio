"use client";

import { PhotoDetail } from "./PhotoDetail";

export interface PhotoDetailsProps {
  size      : string;
  resolution: string;
  format    : string;
}

export const PhotoDetails = ({ size, resolution, format }: PhotoDetailsProps) => {  
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(10em,1fr))] min-w-[13em] gap-8 border rounded-xl p-6">
      <PhotoDetail 
        name  = "Size"
        value = {size}
      />
      <PhotoDetail 
        name  = "Resolution"
        value = {resolution}
      />
      <PhotoDetail 
        name  = "Format"
        value = {format}
      />
    </div>
  );
};