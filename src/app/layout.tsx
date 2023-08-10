import "./globals.css";
import { ReactNode }        from "react";
import { headers }          from "next/headers";
import { SWRConfiguration } from "swr";
import { Providers }        from "@components/Providers";

interface RootLayoutProps {
  children: ReactNode;
}

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.BASE_URL as string;

const RootLayout = async ({ children }: RootLayoutProps) => {  
  return (
    <html lang="en">
      <body>
        <Providers swrConfig={{}}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;