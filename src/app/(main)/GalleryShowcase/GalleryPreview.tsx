"use client";

import { useRef }            from "react";
import { useScroll }         from "framer-motion";
import { useGalleryPreview } from "@hooks/useGalleryPreview";
import { GalleryPhoto }      from "./GalleryPhoto";

export const GalleryPreview = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { photos } = useGalleryPreview();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={wrapperRef} className="flex flex-row items-center justify-center w-full">
      {photos.length ? photos.map((photo, index) => (
        <div key={photo.id} className="relative flex-1 flex flex-row items-center justify-center min-h-[30em]">
          <GalleryPhoto 
            order           = {index + 1}
            amount          = {photos.length}
            scrollYProgress = {scrollYProgress} 
            className       = "absolute"
            src             = {photo.url}
          />
        </div>
      )) : (
        <div className="min-h-[25em]" />
      )}
    </div>
  );
};