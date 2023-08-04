"use client";

import { useRef }       from "react";
import { useScroll }    from "framer-motion";
import { GalleryPhoto } from "./GalleryPhoto";

export const photos: string[] = [
  "photo1",
  "photo2",
  "photo3",
  "photo4",
  "photo5",
  "photo6",
  "photo7"
];

export const GalleryPreview = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={wrapperRef} className="flex flex-row items-center justify-center w-full">
      {photos.map((photo, index) => (
        <div key={photo} className="relative flex-1 flex flex-row items-center justify-center min-h-[35em]">
          <GalleryPhoto 
            order           = {index + 1}
            amount          = {photos.length}
            scrollYProgress = {scrollYProgress} 
            className       = "absolute"
          />
        </div>
      ))}
    </div>
  );
};