import "./globals.css";
import { ReactNode }   from "react";
import { headers }     from "next/headers";
import { Providers }   from "@components/Providers";
import { Query }       from "@utils/query";
import { AuthService } from "@utils/authService";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const query          = new Query({ withCredentials: true, headers: headers() });
  const authService    = new AuthService({ query });
  const { data: user } = await authService.getMe();
  
  return (
    <html lang="en">
      <body>
        <Providers user={user}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;