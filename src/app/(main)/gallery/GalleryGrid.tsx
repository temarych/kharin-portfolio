import { GalleryItem } from "./GalleryItem";

export interface GalleryGridProps {
  photos: string[];
}

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <GalleryItem key={index} src={photo} />
      ))}
    </div>
  );
};