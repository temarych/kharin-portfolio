"use client";

import { HTMLAttributes, forwardRef } from "react";
import { twMerge }                    from "tailwind-merge";

export type ListItemTabDivColor = "gray" | "red";

export type ListItemTabDivColorMap = {
  [color in ListItemTabDivColor]: {
    default : string;
    selected: string;
    common  : string;
  };
}

export const colorMap: ListItemTabDivColorMap = {
  gray: {
    default : "hover:bg-gray-50 active:bg-gray-100",
    selected: "bg-gray-50 active:bg-gray-100",
    common  : "text-black"
  },
  red : {
    default : "hover:bg-red-50 active:bg-red-100",
    selected: "bg-red-50 active:bg-red-100",
    common  : "text-red-400"
  }
};

export interface ListItemTabDivProps extends HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  color?     : ListItemTabDivColor;
}

export const ListItemTabDiv = forwardRef<HTMLDivElement, ListItemTabDivProps>(({ 
  children, className, color = "gray", isSelected, tabIndex = -1, ...props 
}, ref) => {
  const colorStyles = colorMap[color];
  
  return (
    <div 
      {...props} 
      ref       = {ref} 
      tabIndex  = {tabIndex}
      className = {twMerge([
        "w-full text-left outline-none transition cursor-pointer",
        colorStyles.common,
        isSelected === undefined ? colorStyles.default : 
        isSelected ? colorStyles.selected : null,
        className
      ])}
    >
      {children}
    </div>
  );
});