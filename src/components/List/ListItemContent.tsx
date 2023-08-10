"use client";

import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { twMerge }                               from "tailwind-merge";

export interface ListItemContentProps extends HTMLAttributes<HTMLDivElement> {
  leftAdornment? : ReactNode;
  rightAdornment?: ReactNode;
}

export const ListItemContent = forwardRef<HTMLDivElement, ListItemContentProps>(({ 
  children, className, leftAdornment, rightAdornment, ...props 
}, ref) => {
  return (
    <div {...props} ref={ref} className={twMerge(["w-full flex flex-row items-center px-6 py-2 gap-4", className])}>
      {leftAdornment && (
        <div className="flex-0 flex flex-row items-center justify-start">
          {leftAdornment}
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
      {rightAdornment && (
        <div className="flex-0 flex flex-row items-center justify-end">
          {rightAdornment}
        </div>
      )}
    </div>
  );
});