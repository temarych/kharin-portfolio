"use client";

import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge }                                        from "tailwind-merge";

export type ButtonColor = "sky" | "red" | "green";

export type ButtonColorMap = {
  [color in ButtonColor]: string;
};

export const colorMap: ButtonColorMap = {
  sky  : "bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white",
  red  : "bg-red-400 hover:bg-red-500 active:bg-red-600 text-white",
  green: "bg-green-400 hover:bg-green-500 active:bg-green-600 text-white"
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
}

const ButtonWithRef = (
  { children, className, color = "sky", ...props }: ButtonProps,
  ref                                     : ForwardedRef<HTMLButtonElement>
) => {
  const colorStyles = colorMap[color];

  return (
    <button 
      {...props} 
      ref       = {ref} 
      className = {twMerge([
        "min-h-[3em] rounded-lg px-6 disabled:bg-gray-200 disabled:text-gray-500 flex flex-row items-center justify-center transition", 
        colorStyles, 
        className
      ])}
    >
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonWithRef);