import "./globals.css";
import { ReactNode }        from "react";
import { getServerSession } from "next-auth";
import { Providers }        from "@components/Providers";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;