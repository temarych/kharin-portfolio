import { SWRConfiguration }    from "swr";
import { incrementPhotoViews } from "@utils/photos";
import { SWRProvider }         from "@components/SWRProvider";
import { ViewPhotoContent }    from "./ViewPhotoContent";

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL as string;

interface ViewPhotoProps {
  params: {
    id: string;
  };
}

const ViewPhoto = async ({ params }: ViewPhotoProps) => {
  const id       = params.id;
  const response = await fetch(`${BASE_URL}/api/photos/${id}`, { next: { tags: ["photo"] } });
  const photo    = response.ok ? await response.json() : null;

  photo && await incrementPhotoViews(photo.id);

  const swrConfig: SWRConfiguration = {
    [`/api/photos/${id}`]: photo
  };

  return (
    <SWRProvider config={swrConfig}>
      <ViewPhotoContent />
    </SWRProvider>
  );
};

export default ViewPhoto;