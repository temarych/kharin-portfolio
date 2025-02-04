"use client";

import { forwardRef }                   from "react";
import { twMerge }                      from "tailwind-merge";
import { BaseButtonProps, ButtonColor } from ".";

export type ButtonOutlinedColorMap = {
  [color in ButtonColor]: string;
};

export const colorMap: ButtonOutlinedColorMap = {
  sky  : "border-sky-400 hover:bg-sky-50 active:bg-sky-100 text-sky-400",
  red  : "border-red-400 hover:bg-red-50 active:bg-red-100 text-red-400",
  green: "border-green-400 hover:bg-green-50 active:bg-green-100 text-green-400",
  black: "border-gray-800 hover:bg-gray-50 active:bg-gray-100 text-black"
};

export const ButtonOutlined = forwardRef<HTMLButtonElement, BaseButtonProps>(({ 
  children, 
  className, 
  leftAdornment,
  rightAdornment,
  color = "black", 
  ...props 
}, ref) => {
  const colorStyles = colorMap[color];

  return (
    <button 
      {...props} 
      ref       = {ref} 
      className = {twMerge([
        "min-h-[3em] rounded-lg disabled:border-gray-200 disabled:text-gray-500 disabled:bg-gray-50 border flex flex-row items-center justify-center gap-2 transition outline-gray-600", 
        leftAdornment ? "pl-4" : "pl-6",
        rightAdornment ? "pr-4" : "pr-6",
        colorStyles, 
        className
      ])}
    >
      {leftAdornment && (
        <div className="flex-0">
          {leftAdornment}
        </div>
      )}
      <div className="flex-0">
        {children}
      </div>
      {rightAdornment && (
        <div className="flex-0">
          {rightAdornment}
        </div>
      )}
    </button>
  );
});