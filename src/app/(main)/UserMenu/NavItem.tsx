"use client";

import { ReactNode, forwardRef }  from "react";
import { Menu }                   from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { twMerge }                from "tailwind-merge";
import { List }                   from "@components/List";
import { ListItemWrapperProps }   from "@components/List/ListItemWrapper";

export interface NavItemProps extends ListItemWrapperProps {
  icon       : ReactNode;
  activeIcon : ReactNode;
  name       : string;
  path       : string;
}

export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(({ 
  icon, activeIcon, name, path, ...props
}, ref) => {
  const router   = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <List.ItemWrapper {...props} ref={ref} onClick={() => router.push(path)} >
      <Menu.Item>
        {({ active }) => (
          <List.ItemButton 
            isSelected = {active}
            className  = {twMerge([isActive ? "font-bold" : null])}
          >
            <List.ItemContent leftAdornment={isActive ? activeIcon : icon}>
              {name}
            </List.ItemContent>
          </List.ItemButton>
        )}
      </Menu.Item>
    </List.ItemWrapper>
  );
});