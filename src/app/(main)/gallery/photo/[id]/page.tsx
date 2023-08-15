import { SWRConfiguration }    from "swr";
import { SWRProvider }         from "@components/SWRProvider";
import { ViewPhotoContent }    from "./ViewPhotoContent";

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL as string;

interface ViewPhotoProps {
  params: {
    id: string;
  };
}

const ViewPhoto = async ({ params }: ViewPhotoProps) => {
  const id       = params.id;
  const response = await fetch(`${BASE_URL}/api/gallery/photos/${id}`, { next: { tags: [`photo/${id}`] } });
  const photo    = response.ok ? await response.json() : null;

  const swrConfig: SWRConfiguration = {
    fallback: {
      [`/api/gallery/photos/${id}`]: photo
    }
  };

  return (
    <SWRProvider config={swrConfig}>
      <ViewPhotoContent />
    </SWRProvider>
  );
};

export default ViewPhoto;