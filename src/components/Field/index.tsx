import { ReactNode } from "react";
import { twMerge }   from "tailwind-merge";

export type FieldOutlineColor    = "sky" | "red" | "gray";
export type FieldFocusColor      = "sky" | "red" | "black";
export type FieldHelperTextColor = "sky" | "red" | "gray";

export type FieldOutlineColorMap = {
  [color in FieldOutlineColor]: string;
}

export type FieldFocusColorMap = {
  [color in FieldFocusColor]: string;
}

export type FieldHelperTextColorMap = {
  [color in FieldHelperTextColor]: string;
}

export const helperTextColorMap: FieldHelperTextColorMap = {
  sky : "text-sky-400",
  red : "text-red-400",
  gray: "text-gray-400"
};

export const outlineColorMap: FieldOutlineColorMap = {
  sky : "border-sky-300 hover:border-sky-400",
  red : "border-red-300 hover:border-red-400",
  gray: "border-gray-300 hover:border-gray-400"
};

export const focusColorMap: FieldFocusColorMap = {
  sky  : "border-sky-400 ring-sky-400 hover:border-sky-400",
  red  : "border-red-400 ring-red-400 hover:border-red-400",
  black: "border-gray-800 ring-gray-800 hover:border-gray-800"
};

export interface FieldProps {
  outlineColor?   : FieldOutlineColor;
  focusColor?     : FieldFocusColor;
  children?       : ReactNode;
  className?      : string;
  isFocused?      : boolean;
  leftAdornment?  : ReactNode;
  rightAdornment? : ReactNode;
  helperText?     : string;
  helperTextColor?: FieldHelperTextColor;
  hasError?       : boolean;
}

export const Field = ({ 
  children, 
  className, 
  isFocused, 
  leftAdornment, 
  rightAdornment, 
  helperText,
  hasError,
  helperTextColor = hasError ? "red" : "gray",
  outlineColor    = hasError ? "red" : "gray", 
  focusColor      = hasError ? "red" : "black"
}: FieldProps) => {
  const outlineColorStyles    = outlineColorMap[outlineColor];
  const focusColorStyles      = focusColorMap[focusColor];
  const helperTextColorStyles = helperTextColorMap[helperTextColor];

  return (
    <div className="flex flex-col gap-2">
      <div 
        className={twMerge([
          "relative border rounded-lg min-h-[3em] overflow-hidden flex flex-col", 
          outlineColorStyles,
          isFocused ? twMerge(["ring-1", focusColorStyles]) : null,
          className
        ])} 
      >
        {leftAdornment && (
          <div className="absolute left-0 top-0 bottom-0 w-[3em]">
            {leftAdornment}
          </div>
        )}
        <div className="relative w-full flex-1 flex flex-col">
          {children}
        </div>
        {rightAdornment && (
          <div className="absolute right-0 top-0 bottom-0 w-[3em]">
            {rightAdornment}
          </div>
        )}
      </div>
      {helperText && (
        <h1 className={twMerge(["text-sm px-4", helperTextColorStyles])}>
          {helperText}
        </h1>
      )}
    </div>
  );
};