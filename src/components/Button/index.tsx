"use client";

import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { twMerge }                                        from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const ButtonWithRef = (
  { children, className, ...props }: ButtonProps,
  ref                              : ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button {...props} ref={ref} className={twMerge(["rounded-lg px-6 py-3 bg-sky-400 text-white", className])}>
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonWithRef);