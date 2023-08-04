import { ReactNode } from "react";
import Image         from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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