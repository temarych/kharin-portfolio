import Image from "next/image";

export interface GalleryItemProps {
  src: string;
}

export const GalleryItem = ({ src }: GalleryItemProps) => {
  return (
    <div className="relative rounded-xl bg-gray-50 aspect-[3/4] overflow-hidden">
      <Image
        fill
        alt       = "gallery-item"
        src       = {src}
        quality   = {5}
        className = "object-cover"
      />
    </div>
  );
};