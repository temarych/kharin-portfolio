"use client";

export interface PhotoDetailProps {
  name : string;
  value: string;
}

export const PhotoDetail = ({ name, value }: PhotoDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex flex-col">
        <p className="text-md text-gray-400">{name}</p>
        <h1 className="text-xl">{value}</h1>
      </div>
    </div>
  );
};