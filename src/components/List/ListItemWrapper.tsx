"use client";

import { LiHTMLAttributes, forwardRef } from "react";
import { twMerge }                      from "tailwind-merge";

export interface ListItemWrapperProps extends LiHTMLAttributes<HTMLLIElement> {
  
}

export const ListItemWrapper = forwardRef<HTMLLIElement, ListItemWrapperProps>(({ 
  children, className, ...props 
}, ref) => {
  return (
    <li {...props} ref={ref} className={twMerge(["w-full list-none", className])}>
      {children}
    </li>
  );
});