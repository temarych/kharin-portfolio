import { ReactNode }          from "react";
import { SWRConfiguration }   from "swr";
import { unstable_serialize } from "swr/infinite";
import { SWRProvider }        from "@components/SWRProvider";

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL as string;

interface GalleryLayoutProps {
  children: ReactNode;
}

const GalleryLayout = async ({ children }: GalleryLayoutProps) => {
  const response       = await fetch(`${BASE_URL}/api/gallery/photos?page=1`, { next: { tags: ["photos"] } });
  const photosResponse = await response.json();

  const swrConfig: SWRConfiguration = {
    fallback: {
      [unstable_serialize(pageIndex => `/api/gallery/photos?page=${pageIndex + 1}`)]: [photosResponse]
    }
  };

  return (
    <SWRProvider config={swrConfig}>
      {children}
    </SWRProvider>
  );
};

export default GalleryLayout;