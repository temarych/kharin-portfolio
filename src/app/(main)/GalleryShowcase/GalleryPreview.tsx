"use client";

import { useRef }       from "react";
import { useScroll }    from "framer-motion";
import { GalleryPhoto } from "./GalleryPhoto";

export const photos: string[] = [
  "/gallery-photo-1.jpg",
  "/gallery-photo-2.jpg",
  "/gallery-photo-3.jpg",
  "/gallery-photo-4.jpg",
  "/gallery-photo-5.jpg",
  "/gallery-photo-6.jpg",
  "/gallery-photo-7.jpg"
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
        <div key={photo} className="relative flex-1 flex flex-row items-center justify-center min-h-[30em]">
          <GalleryPhoto 
            order           = {index + 1}
            amount          = {photos.length}
            scrollYProgress = {scrollYProgress} 
            className       = "absolute"
            src             = {photo}
          />
        </div>
      ))}
    </div>
  );
};