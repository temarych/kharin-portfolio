"use client";

export interface PhotoDetailProps {
  name : string;
  value: string;
}

export const PhotoDetail = ({ name, value }: PhotoDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">{name}</p>
        <h1 className="text-lg">{value}</h1>
      </div>
    </div>
  );
};