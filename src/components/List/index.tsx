"use client";

import { HTMLAttributes, forwardRef } from "react";
import { twMerge }                    from "tailwind-merge";
import { ListItemWrapper }            from "./ListItemWrapper";
import { ListItemButton }             from "./ListItemButton";
import { ListItemContent }            from "./ListItemContent";

export interface ListProps extends HTMLAttributes<HTMLUListElement> {

}

export const List = Object.assign(
  forwardRef<HTMLUListElement, ListProps>(({ 
    children, className, ...props 
  }, ref) => {
    return (
      <ul {...props} ref={ref} className={twMerge(["py-4", className])}>
        {children}
      </ul>
    );
  }),
  {
    ItemWrapper: ListItemWrapper,
    ItemButton : ListItemButton,
    ItemContent: ListItemContent
  }
);