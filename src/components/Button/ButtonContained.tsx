"use client";

import { ForwardedRef, forwardRef }     from "react";
import { twMerge }                      from "tailwind-merge";
import { BaseButtonProps, ButtonColor } from ".";

export type ButtonContainedColorMap = {
  [color in ButtonColor]: string;
};

export const colorMap: ButtonContainedColorMap = {
  sky  : "bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white",
  red  : "bg-red-400 hover:bg-red-500 active:bg-red-600 text-white",
  green: "bg-green-400 hover:bg-green-500 active:bg-green-600 text-white",
  black: "bg-gray-800 hover:bg-gray-900 active:bg-black text-white"
};

const ButtonContainedWithRef = (
  { children, className, color = "black", ...props }: BaseButtonProps,
  ref                                               : ForwardedRef<HTMLButtonElement>
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

export const ButtonContained = forwardRef(ButtonContainedWithRef);