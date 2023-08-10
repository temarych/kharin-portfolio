import { ReactNode } from "react";

export interface GalleryGridProps {
  children: ReactNode;
}

export const GalleryGrid = ({ children }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};