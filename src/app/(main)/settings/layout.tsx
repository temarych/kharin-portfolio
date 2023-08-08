"use client";

import { ReactNode } from "react";
import { redirect }  from "next/navigation";
import { useAuth }   from "@hooks/useAuth";
import { Sidebar }   from "./Sidebar";

export interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <div className="w-full min-h-screen px-4 pt-24 pb-8 flex flex-col items-center">
      <div className="w-full flex-1 max-w-[80em] flex flex-col md:flex-row gap-8">
        <div className="min-w-[20em] min-h-full flex-1 md:flex-none">
          <Sidebar />
        </div>
        <div className="min-w-[20em] min-h-full flex-1 border rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;