"use client";

import { useRef, useState }  from "react";
import { useInView, motion } from "framer-motion";
import { HiPlus }            from "react-icons/hi";
import { useAuth }           from "@hooks/useAuth";
import { Button }            from "@components/Button";
import { AnchorMask }        from "../AnchorMask";
import { GalleryGrid }       from "./GalleryGrid";
import { GalleryItem }       from "./GalleryItem";
import { ViewPhotoDialog }   from "./ViewPhotoDialog";
import { AddPhotoDialog }    from "./AddPhotoDialog";

const photos = [
  "/gallery-photo-1.jpg",
  "/gallery-photo-2.jpg",
  "/gallery-photo-3.jpg",
  "/gallery-photo-4.jpg",
  "/gallery-photo-5.jpg",
  "/gallery-photo-6.jpg",
  "/gallery-photo-7.jpg"
];

const Gallery = () => {
  const controlRef                  = useRef<HTMLDivElement>(null);
  const { isAuthorized }            = useAuth();
  const isControlInView             = useInView(controlRef);
  const [openDialog, setOpenDialog] = useState<"add-photo" | "view-photo" | null>(null);

  return (
    <section className="pt-24 pb-8 flex flex-col items-center px-4">
      <div className="max-w-[80em] w-full flex flex-col gap-8">
        <div ref={controlRef} className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-3xl">Gallery</h1>
          {isAuthorized && (
            <Button 
              color         = "green"
              leftAdornment = {<HiPlus />} 
              onClick       = {() => setOpenDialog("add-photo")}
            >
              Add photo
            </Button>
          )}
        </div>
        <GalleryGrid>
          {photos.map((photo, index) => (
            <motion.div 
              key        = {index} 
              initial    = {{ scale: 1 }} 
              whileHover = {{ scale: 1.015 }}
              className  = "cursor-pointer"
              onClick    = {() => setOpenDialog("view-photo")}
            >
              <GalleryItem src={photo} />
            </motion.div>
          ))}
        </GalleryGrid>
      </div>
      <AnchorMask isAnchorShown={!isControlInView} />
      <ViewPhotoDialog 
        isOpen  = {openDialog === "view-photo"} 
        onClose = {() => setOpenDialog(null)} 
      />
      <AddPhotoDialog 
        isOpen  = {openDialog === "add-photo"} 
        onClose = {() => setOpenDialog(null)} 
      />
    </section>
  );
};

export default Gallery;