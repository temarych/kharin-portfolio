"use client";

import { useRef }            from "react";
import { useInView, motion } from "framer-motion";
import { useRouter }         from "next/navigation";
import { HiPlus }            from "react-icons/hi";
import { useAuth }           from "@hooks/useAuth";
import { usePhotos }         from "@hooks/usePhotos";
import { Button }            from "@components/Button";
import { AnchorMask }        from "../AnchorMask";
import { GalleryGrid }       from "./GalleryGrid";
import { GalleryItem }       from "./GalleryItem";

const Gallery = () => {
  const router           = useRouter();
  const controlRef       = useRef<HTMLDivElement>(null);
  const { isAuthorized } = useAuth();
  const isControlInView  = useInView(controlRef);
  const { photos }       = usePhotos();

  return (
    <section className="pt-24 pb-8 flex flex-col items-center px-4">
      <div className="max-w-[80em] w-full flex flex-col gap-8">
        <div ref={controlRef} className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-3xl">Gallery</h1>
          {isAuthorized && (
            <Button 
              color         = "green"
              leftAdornment = {<HiPlus />} 
              onClick       = {() => router.push("/gallery/add/photo")}
            >
              Add photo
            </Button>
          )}
        </div>
        <GalleryGrid>
          {photos.map(photo => (
            <motion.div 
              key        = {photo.id} 
              initial    = {{ scale: 1 }} 
              whileHover = {{ scale: 1.015 }}
              className  = "cursor-pointer"
              onClick    = {() => router.push(`/gallery/photo/${photo.id}`)}
            >
              <GalleryItem src={photo.url} />
            </motion.div>
          ))}
        </GalleryGrid>
      </div>
      <AnchorMask isAnchorShown={!isControlInView} />
    </section>
  );
};

export default Gallery;