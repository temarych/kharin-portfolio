"use client";

import { ReactNode }              from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconButton }             from "@components/IconButton";

export interface ShortNavItemProps {
  icon       : ReactNode;
  activeIcon : ReactNode;
  path       : string;
}

export const ShortNavItem = ({ icon, path, activeIcon }: ShortNavItemProps) => {
  const router   = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;
  
  return (
    <li className="list-none">
      <IconButton 
        onClick   = {() => router.push(path)}
        className = "text-xl"
      >
        {isActive ? activeIcon : icon}
      </IconButton>
    </li>
  );
};