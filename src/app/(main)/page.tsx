import { SWRConfiguration } from "swr";
import { SWRProvider }      from "@components/SWRProvider";
import { HomeContent }      from "./HomeContent";

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL as string;

const Home = async () => {
  const response        = await fetch(`${BASE_URL}/api/gallery/preview`, { next: { tags: ["preview"] } });
  const previewResponse = await response.json();

  const swrConfig: SWRConfiguration = {
    fallback: {
      "/api/gallery/preview": previewResponse
    }
  };

  return (
    <SWRProvider config={swrConfig}>
      <HomeContent />
    </SWRProvider>
  );
};

export default Home;