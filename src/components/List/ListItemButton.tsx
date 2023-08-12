"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge }                          from "tailwind-merge";

export type ListItemButtonColor = "gray" | "red";

export type ListItemButtonColorMap = {
  [color in ListItemButtonColor]: {
    default : string;
    selected: string;
    common  : string;
  };
}

export const colorMap: ListItemButtonColorMap = {
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

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  color?     : ListItemButtonColor;
}

export const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>(({ 
  children, className, color = "gray", isSelected, ...props 
}, ref) => {
  const colorStyles = colorMap[color];
  
  return (
    <button 
      {...props} 
      ref       = {ref} 
      className = {twMerge([
        "w-full text-left outline-none transition",
        colorStyles.common,
        isSelected === undefined ? colorStyles.default : 
        isSelected ? colorStyles.selected : null,
        className
      ])}
    >
      {children}
    </button>
  );
});