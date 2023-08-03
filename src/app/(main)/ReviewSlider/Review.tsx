import Image       from "next/image";
import { HiStar }  from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export interface ReviewProps {
  className?: string;
}

export const Review = ({ className }: ReviewProps) => {
  return (
    <div className={twMerge(["relative border rounded-2xl p-8 min-h-[30em] flex flex-col gap-6", className])}>
      <Image
        alt       = "client"
        src       = "/client.png"
        width     = {500}
        height    = {500}
        className = "rounded-full object-cover w-28 h-28"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Tymur Yavtushenko</h1>
        <p className="text-gray-400">Client</p>
      </div>
      <p className="h-full text-lg">Great photos and videos, thanks!</p>
      <div className="flex flex-row gap-2 text-yellow-300 text-3xl">
        <HiStar />
        <HiStar />
        <HiStar />
        <HiStar />
        <HiStar />
      </div>
    </div>
  );
};