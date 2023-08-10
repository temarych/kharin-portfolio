"use client";

import { useRef }      from "react";
import { useInView }   from "framer-motion";
import { HiPlus }      from "react-icons/hi";
import { useAuth }     from "@hooks/useAuth";
import { Button }      from "@components/Button";
import { AnchorMask }  from "../AnchorMask";
import { GalleryGrid } from "./GalleryGrid";

const Gallery = () => {
  const controlRef       = useRef<HTMLDivElement>(null);
  const { isAuthorized } = useAuth();
  const isControlInView  = useInView(controlRef);

  return (
    <section className="pt-24 pb-8 flex flex-col items-center px-4">
      <div className="max-w-[80em] w-full flex flex-col gap-8">
        <div ref={controlRef} className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-3xl">Gallery</h1>
          {isAuthorized && <Button leftAdornment={<HiPlus />} color="green">Add photo</Button>}
        </div>
        <GalleryGrid 
          photos={[
            "/gallery-photo-1.jpg",
            "/gallery-photo-2.jpg",
            "/gallery-photo-3.jpg",
            "/gallery-photo-4.jpg",
            "/gallery-photo-5.jpg",
            "/gallery-photo-6.jpg",
            "/gallery-photo-7.jpg",
            "/gallery-photo-1.jpg",
            "/gallery-photo-2.jpg",
            "/gallery-photo-3.jpg",
            "/gallery-photo-4.jpg",
            "/gallery-photo-5.jpg",
            "/gallery-photo-6.jpg",
            "/gallery-photo-7.jpg"
          ]} 
        />
      </div>
      <AnchorMask isAnchorShown={!isControlInView} />
    </section>
  );
};

export default Gallery;