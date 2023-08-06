import "./globals.css";
import { ReactNode }        from "react";
import { getServerSession } from "next-auth";
import { Providers }        from "@components/Providers";
import { getUser }          from "@utils/user";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await getServerSession();
  const email   = session?.user?.email ?? null;
  const user    = email ? await getUser(email) : null;

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