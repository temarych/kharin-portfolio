"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

export interface GalleryPhotoProps {
  scrollYProgress: MotionValue<number>;
  order          : number;
  amount         : number;
}

export const GalleryPhoto = ({ scrollYProgress, order, amount }: GalleryPhotoProps) => {
  const y = useTransform(scrollYProgress, [0, order / amount], [400, 0]);

  return (
    <div className="relative flex-1 h-[35em] flex flex-row items-center justify-center">
      <motion.div className="absolute min-w-[20em] h-[30em] bg-gray-100 rounded-2xl border" style={{ y, rotate: "-12deg" }} />
    </div>
  );
};