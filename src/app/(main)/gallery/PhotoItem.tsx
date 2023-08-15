import { useEffect, useState } from "react";
import { HiOutlineTrash }      from "react-icons/hi";
import Image                   from "next/image";
import { IconButton }          from "@components/IconButton";

export interface PhotoItemProps {
  value   : File;
  onRemove: () => void;
}

export const PhotoItem = ({ value, onRemove }: PhotoItemProps) => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(
    () => {
      setPreviewURL(previewURL => {
        previewURL && URL.revokeObjectURL(previewURL);
        return URL.createObjectURL(value);
      });
    },
    [value]
  );

  useEffect(
    () => () => {
      previewURL && URL.revokeObjectURL(previewURL);
    },
    [previewURL]
  );

  return (
    <div className="flex flex-row items-center gap-4 p-4 border rounded-xl">
      {previewURL && (
        <div className="relative w-12 h-12 rounded-xl overflow-hidden">
          <Image 
            fill
            src   = {previewURL}
            alt   = "photo"
            sizes = "33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h1 className="text-md line-clamp-1 break-all">{value.name}</h1>
        <p className="text-sm text-gray-400 line-clamp-1">{(value.size / 1000).toFixed(2)} KB</p>
      </div>
      <IconButton onClick={onRemove}>
        <HiOutlineTrash className="text-xl" />
      </IconButton>
    </div>
  );
};