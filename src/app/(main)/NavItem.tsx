"use client";

import { ReactNode, forwardRef }  from "react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge }                from "tailwind-merge";
import { List }                   from "@components/List";
import { ListItemWrapperProps }   from "@components/List/ListItemWrapper";

export interface NavItemProps extends ListItemWrapperProps {
  icon       : ReactNode;
  activeIcon : ReactNode;
  name       : string;
  path       : string;
  isSelected?: boolean;
}

export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(({ 
  icon, activeIcon, name, path, isSelected, ...props
}, ref) => {
  const router   = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <List.ItemWrapper {...props} ref={ref} onClick={() => router.push(path)} >
      <List.ItemButton 
        isSelected = {isSelected}
        className  = {twMerge([isActive ? "font-bold" : null])}
      >
        <List.ItemContent leftAdornment={isActive ? activeIcon : icon}>
          {name}
        </List.ItemContent>
      </List.ItemButton>
    </List.ItemWrapper>
  );
});