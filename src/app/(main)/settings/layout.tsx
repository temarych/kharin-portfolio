"use client";

import { ReactNode }  from "react";
import { redirect }   from "next/navigation";
import { useAuth }    from "@hooks/useAuth";
import { Sidebar }    from "./Sidebar";
import { ControlBar } from "./ControlBar";

export interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <div className="w-full pt-16 md:px-4 md:pt-24 md:pb-8 flex flex-col items-center">
      <div className="w-full flex-1 max-w-[80em] flex flex-col md:flex-row md:items-start md:gap-8">
        <div className="min-w-[20em] w-full md:w-min hidden md:flex flex-col">
          <Sidebar />
        </div>
        <div className="w-full md:hidden">
          <ControlBar />
        </div>
        <div className="min-w-[20em] w-full md:border rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;