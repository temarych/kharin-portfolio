"use client";

import { ReactNode }              from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconButton }             from "@components/IconButton";

export interface NavItemProps {
  icon       : ReactNode;
  activeIcon : ReactNode;
  path       : string;
}

export const NavItem = ({ 
  icon, activeIcon, path
}: NavItemProps) => {
  const router   = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <IconButton onClick={() => router.push(path)} className="text-lg">
      {isActive ? activeIcon : icon}
    </IconButton>
  );
};