"use client";

import { HiCalendar, HiCamera, HiTag, HiUpload } from "react-icons/hi";
import { Photo }                                 from "./PickPhoto";

export interface PhotoDetailsProps {
  photo: Photo;
}

export const PhotoDetails = ({ photo }: PhotoDetailsProps) => {  
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-row items-center gap-4">
        <HiUpload className="text-2xl" />
        <div className="flex flex-col">
          <p className="text-md text-gray-400">Size</p>
          <h1 className="text-xl">{(photo.file.size / 1000).toFixed()} KB</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <HiCalendar className="text-2xl" />
        <div className="flex flex-col">
          <p className="text-md text-gray-400">Last modified</p>
          <h1 className="text-xl">{Intl.DateTimeFormat().format(new Date(photo.file.lastModified))}</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <HiCamera className="text-2xl" />
        <div className="flex flex-col">
          <p className="text-md text-gray-400">Resolution</p>
          <h1 className="text-xl">{photo.size.width}x{photo.size.height}</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <HiTag className="text-2xl" />
        <div className="flex flex-col">
          <p className="text-md text-gray-400">Type</p>
          <h1 className="text-xl">{photo.file.type}</h1>
        </div>
      </div>
    </div>
  );
};