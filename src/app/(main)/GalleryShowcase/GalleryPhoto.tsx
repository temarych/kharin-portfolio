"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { twMerge }                           from "tailwind-merge";

export interface GalleryPhotoProps {
  scrollYProgress: MotionValue<number>;
  order          : number;
  amount         : number;
  className?     : string;
}

export const GalleryPhoto = ({ scrollYProgress, order, amount, className }: GalleryPhotoProps) => {
  const y = useTransform(scrollYProgress, [0, order / amount], [400, 0]);

  return (
    <motion.div 
      className = {twMerge(["min-w-[20em] min-h-[30em] bg-gray-100 rounded-2xl border", className])} 
      style     = {{ y, rotate: "-12deg" }} 
    />
  );
};