import "./globals.css";
import { ReactNode }     from "react";
import { getServerAuth } from "@utils/auth";
import { Providers }     from "@components/Providers";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { session, user } = await getServerAuth();

  return (
    <html lang="en">
      <body>
        <Providers session={session} user={user}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;