import { ReactNode }        from "react";
import { SWRConfiguration } from "swr";
import { SWRProvider }      from "@components/SWRProvider";
import { Header }           from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.BASE_URL as string;

const MainLayout = async ({ children }: MainLayoutProps) => {
  const response       = await fetch(`${BASE_URL}/api/photos`, { next: { tags: ["photos"] } });
  const photosResponse = response.ok ? await response.json() : null;

  const swrConfig: SWRConfiguration = {
    fallback: {
      "/api/photos": photosResponse
    }
  };
  
  return (
    <SWRProvider config={swrConfig}>
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </SWRProvider>
  );
};

export default MainLayout;