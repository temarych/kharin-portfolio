"use client";

import { useRef }       from "react";
import { useScroll }    from "framer-motion";
import { GalleryPhoto } from "./GalleryPhoto";

export const photos: string[] = [
  "photo1",
  "photo2",
  "photo3"
];

export const GalleryPreview = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={wrapperRef} className="flex flex-row items-center justify-center overflow-x-clip w-full">
      {photos.map((photo, index) => (
        <GalleryPhoto 
          key             = {photo} 
          order           = {index + 1}
          amount          = {photos.length}
          scrollYProgress = {scrollYProgress} 
        />
      ))}
    </div>
  );
};