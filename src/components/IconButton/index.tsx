"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge }                          from "tailwind-merge";

export type IconButtonColor = "gray" | "green";

export type IconButtonColorMap = {
  [color in IconButtonColor]: string;
}

export const colorMap: IconButtonColorMap = {
  gray : "text-gray-600 hover:bg-gray-200/50 active:bg-gray-300/50 disabled:bg-gray-100/50 disabled:text-gray-400",
  green: "text-green-600 hover:bg-green-200/50 active:bg-green-300/50 disabled:bg-green-100/50 disabled:text-green-400",
};

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IconButtonColor;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ 
  children, className, color = "gray", ...props 
}, ref) => {
  return (
    <button 
      {...props} 
      ref       = {ref} 
      className = {twMerge([
        "w-11 h-11 rounded-full flex flex-col items-center justify-center transition outline-gray-600", 
        colorMap[color],
        className
      ])}
    >
      {children}
    </button>
  );
});