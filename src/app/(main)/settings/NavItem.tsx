"use client";

import { ReactNode }              from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge }                from "tailwind-merge";
import { List }                   from "@components/List";

export interface NavItemProps {
  icon      : ReactNode;
  activeIcon: ReactNode;
  name      : string;
  path      : string;
}

export const NavItem = ({ icon, activeIcon, name, path }: NavItemProps) => {
  const router   = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <List.ItemWrapper>
      <List.ItemButton 
        onClick   = {() => router.push(path)} 
        className = {twMerge([isActive ? "font-bold" : null])}
      >
        <List.ItemContent leftAdornment={isActive ? activeIcon : icon}>
          {name}
        </List.ItemContent>
      </List.ItemButton>
    </List.ItemWrapper>
  );
};