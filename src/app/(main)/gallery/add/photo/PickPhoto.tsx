"use client";

import { useEffect, useMemo, useState }   from "react";
import { HiCamera, HiSparkles, HiUpload } from "react-icons/hi";
import { Dropzone }                       from "./Dropzone";
import { Hint }                           from "./Hint";

export interface PhotoSize {
  width : number;
  height: number;
}

export interface Photo {
  file: File;
  size: PhotoSize;
  url : string;
}

export const getSize = async (dataURL: string): Promise<PhotoSize> => {
  return new Promise(resolve => {
    const image = new Image();

    image.onload = () => {
      const width  = image.width;
      const height = image.height;
      resolve({ width, height });
    };

    image.src = dataURL;
  });
};

export interface PickPhotoProps {
  onPick?: (photo: Photo) => void;
}

export const PickPhoto = ({ onPick }: PickPhotoProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [size, setSize] = useState<PhotoSize | null>(null);
  const [url, setURL]   = useState<string | null>(null);

  const photo = useMemo(
    () => {
      if (!file || !size || !url) return null;
      return { file, size, url };
    },
    [file, url, size]
  );

  useEffect(
    () => {
      setURL(previewURL => {
        previewURL && URL.revokeObjectURL(previewURL);
        if (!file) return null;
        return URL.createObjectURL(file);
      });
    },
    [file]
  );

  useEffect(
    () => {
      (async () => {
        const size = url ? await getSize(url) : null;
        setSize(size);
      })();
    },
    [url]
  );

  useEffect(
    () => {
      onPick && photo && onPick(photo);
    },
    [photo, onPick]
  );

  return (
    <section className="flex flex-col items-center pt-16 px-4">
      <div className="max-w-[80em] w-full py-8 flex flex-col gap-8">
        <Dropzone onDrop={setFile} />
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
    </section>
  );
};