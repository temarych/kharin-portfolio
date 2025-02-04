"use client";

import { twMerge }               from "tailwind-merge";
import { useDropzone }           from "react-dropzone";
import { HiOutlineDocumentAdd }  from "react-icons/hi";
import { Button }                from "@components/Button";

export interface DropzoneProps {
  onDrop?: (file: File) => void;
}

export const Dropzone = ({ onDrop }: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject, open } = useDropzone({
    noClick : true,
    multiple: false,
    onDrop  : files => {
      onDrop && onDrop(files[0]);
    },
    accept  : {
      "image/jpg" : [".jpg", ".JPG"],
      "image/png" : [".png", ".PNG"],
      "image/jpeg": [".jpeg", ".JPEG"]
    }
  });

  const activeStyles   = isDragReject ? "border-red-200 bg-red-50 text-red-500" : "border-green-200 bg-green-50 text-green-500";
  const inactiveStyles = "text-gray-800 border-gray-200";

  return (
    <div 
      {...getRootProps({ tabIndex: -1 })} 
      className={twMerge([
        "rounded-3xl border-4 border-dashed h-[30em] flex flex-col transition overflow-hidden py-8",
        isDragActive ? activeStyles : inactiveStyles,
      ])}
    >
      <div className="flex-1" />
      <div className="flex-0 flex flex-col items-center justify-center gap-2">
        <HiOutlineDocumentAdd className="text-7xl" />
        <h1 className="font-semibold text-xl">Drag and drop</h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-end">
        <Button 
          onClick={open} 
          color={isDragActive ? isDragReject ? "red" : "green" : "black"} 
          className="min-h-[2.8em]"
        >
          Browse
        </Button>
      </div>
      <input {...getInputProps()} />
    </div>
  );
};