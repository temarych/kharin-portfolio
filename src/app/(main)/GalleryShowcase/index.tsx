"use client";

import { useRouter }      from "next/navigation";
import { Button }         from "@components/Button";
import { GalleryPreview } from "./GalleryPreview";

export const GalleryShowcase = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8">
      <GalleryPreview />
      <Button 
        className = "max-w-[15em] w-full"
        onClick   = {() => router.push("/gallery")}
      >
        See gallery
      </Button>
    </div>
  );
};