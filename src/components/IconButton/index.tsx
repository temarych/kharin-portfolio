"use client";

import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge }                                        from "tailwind-merge";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const IconButtonWithRef = (
  { children, className, ...props }: IconButtonProps,
  ref                              : ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button {...props} ref={ref} className={twMerge(["w-11 h-11 rounded-full flex flex-col items-center justify-center text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition", className])}>
      {children}
    </button>
  );
};

export const IconButton = forwardRef(IconButtonWithRef);