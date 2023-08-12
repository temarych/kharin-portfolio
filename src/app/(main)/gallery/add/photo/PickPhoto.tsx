"use client";

import { HiCamera, HiSparkles, HiUpload } from "react-icons/hi";
import { Dropzone }                       from "./Dropzone";
import { Hint }                           from "./Hint";

export const PickPhoto = () => {
  return (
    <div className="flex flex-col gap-8">
      <Dropzone />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
        <Hint
          icon        = {<HiUpload className="text-4xl text-gray-800" />}
          title       = "Size limit"
          description = "Make sure size is less than 10 MB"
        />
        <Hint 
          icon        = {<HiCamera className="text-4xl text-gray-800" />}
          title       = "Format"
          description = "Images can only be JPG or PNG"
        />
        <Hint 
          icon        = {<HiSparkles className="text-4xl text-gray-800" />}
          title       = "Quality"
          description = "High quality preserved"
        />
      </div>
    </div>
  );
};