import { GalleryItem } from "./GalleryItem";

const Gallery = () => {
  return (
    <section className="pt-24 pb-8 flex flex-col items-center px-4">
      <div className="max-w-[80em] w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <GalleryItem src="/gallery-photo-1.jpg" />
          <GalleryItem src="/gallery-photo-2.jpg" />
          <GalleryItem src="/gallery-photo-3.jpg" />
          <GalleryItem src="/gallery-photo-4.jpg" />
          <GalleryItem src="/gallery-photo-5.jpg" />
          <GalleryItem src="/gallery-photo-1.jpg" />
          <GalleryItem src="/gallery-photo-2.jpg" />
          <GalleryItem src="/gallery-photo-3.jpg" />
          <GalleryItem src="/gallery-photo-4.jpg" />
          <GalleryItem src="/gallery-photo-5.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;