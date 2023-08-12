"use client";

import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge }                                        from "tailwind-merge";

export type FloatingButtonColor = "sky" | "red" | "green" | "black";

export type FloatingButtonColorMap = {
  [color in FloatingButtonColor]: string;
};

export const colorMap: FloatingButtonColorMap = {
  sky  : "bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white",
  red  : "bg-red-400 hover:bg-red-500 active:bg-red-600 text-white",
  green: "bg-green-400 hover:bg-green-500 active:bg-green-600 text-white",
  black: "bg-gray-800 hover:bg-gray-900 active:bg-black text-white"
};

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: FloatingButtonColor;
}

const FloatingButtonWithRef = (
  { children, className, color = "black", ...props }: FloatingButtonProps,
  ref                                     : ForwardedRef<HTMLButtonElement>
) => {
  const colorStyles = colorMap[color];

  return (
    <button {...props} ref={ref} className={twMerge(["w-14 h-14 rounded-full flex flex-col items-center justify-center transition outline-gray-600 outline-offset-4", colorStyles, className])}>
      {children}
    </button>
  );
};

export const FloatingButton = forwardRef(FloatingButtonWithRef);