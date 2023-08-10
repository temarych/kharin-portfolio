import Image from "next/image";

export interface GalleryItemProps {
  src: string;
}

export const GalleryItem = ({ src }: GalleryItemProps) => {
  return (
    <div className="relative rounded-xl bg-gray-50 aspect-[3/4] overflow-hidden">
      <Image
        fill
        priority
        alt       = "gallery-item"
        src       = {src}
        sizes     = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className = "object-cover"
      />
    </div>
  );
};