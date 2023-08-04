"use client";

import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge }                                        from "tailwind-merge";

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const FloatingButtonWithRef = (
  { children, className, ...props }: FloatingButtonProps,
  ref                                                        : ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button {...props} ref={ref} className={twMerge(["w-14 h-14 rounded-full flex flex-col items-center justify-center bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white transition", className])}>
      {children}
    </button>
  );
};

export const FloatingButton = forwardRef(FloatingButtonWithRef);