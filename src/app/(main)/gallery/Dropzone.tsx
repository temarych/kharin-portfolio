"use client";

import { useCallback, useState } from "react";
import { twMerge }               from "tailwind-merge";
import { useDropzone }           from "react-dropzone";
import { HiOutlineDocumentAdd }  from "react-icons/hi";

export interface DropzoneProps {
  value?   : File[];
  onChange?: (files: File[]) => void;
}

export const Dropzone = ({ value: propValue, onChange }: DropzoneProps) => {
  const isControlled                = propValue !== undefined;
  const [innerValue, setInnerValue] = useState<File[]>([]);
  const value                       = isControlled ? propValue : innerValue;

  const setValue = useCallback(
    (value: File[]) => {
      !isControlled && setInnerValue(value);
      onChange && onChange(value);
    },
    [isControlled, onChange]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: files => {
      setValue([...value, ...files]);
    },
    accept: {
      "image/jpg" : [".jpg", ".JPG"],
      "image/png" : [".png", ".PNG"],
      "image/jpeg": [".jpeg", ".JPEG"]
    }
  });

  const activeStyles   = isDragReject ? "border-red-400 bg-red-100 text-red-400" : "border-gray-400 bg-gray-100 text-gray-400";
  const inactiveStyles = "bg-gray-50 text-gray-400 border-gray-300 hover:border-gray-400 hover:bg-gray-100";

  return (
    <div 
      {...getRootProps()} 
      className={twMerge([
        "rounded-xl border-2 border-dashed min-h-[15em] flex flex-col items-center justify-center cursor-pointer gap-2 transition overflow-hidden",
        isDragActive ? activeStyles : inactiveStyles,
      ])}
    >
      <HiOutlineDocumentAdd className="text-5xl" />
      <h1 className="font-semibold text-lg">Drop files</h1>
      <input {...getInputProps()} />
    </div>
  );
};