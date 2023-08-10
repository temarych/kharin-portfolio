"use client";

import Image                                 from "next/image";
import { MotionValue, motion, useTransform } from "framer-motion";
import { twMerge }                           from "tailwind-merge";

export interface GalleryPhotoProps {
  scrollYProgress: MotionValue<number>;
  order          : number;
  amount         : number;
  className?     : string;
  src            : string;
}

export const GalleryPhoto = ({ scrollYProgress, order, amount, className, src }: GalleryPhotoProps) => {
  const y = useTransform(scrollYProgress, [0, order / amount], [400, 0]);

  return (
    <motion.div 
      className = {twMerge(["min-w-[20em] min-h-[25em] bg-gray-100 rounded-2xl border overflow-hidden", className])} 
      style     = {{ y, rotate: "-12deg" }} 
    >
      <Image 
        fill
        priority
        alt       = "gallery-photo"
        src       = {src}
        sizes     = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className = "object-cover"
      />
    </motion.div>
  );
};