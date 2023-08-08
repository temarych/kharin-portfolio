import { ReactNode }        from "react";
import Image                from "next/image";
import { getServerSession } from "next-auth";
import { redirect }         from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await getServerSession();

  if (session && session.user) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div className="relative bg-gray-50 hidden sm:flex">
        <Image 
          fill
          alt       = "auth-bg"
          src       = "/auth-bg.jpg"
          className = "object-cover"
        />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;