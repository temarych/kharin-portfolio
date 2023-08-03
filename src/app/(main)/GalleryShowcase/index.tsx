import { Button }         from "@components/Button";
import { GalleryPreview } from "./GalleryPreview";

export const GalleryShowcase = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <GalleryPreview />
      <Button className="max-w-[15em] w-full">See gallery</Button>
    </div>
  );
};