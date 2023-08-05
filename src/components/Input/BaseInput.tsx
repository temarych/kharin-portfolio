import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge }                         from "tailwind-merge";

export type BaseInputOutlineColor = "sky" | "red" | "gray";
export type BaseInputFocusColor   = "sky" | "red";

export type BaseInputOutlineColorMap = {
  [color in BaseInputOutlineColor]: string;
}

export type BaseInputFocusColorMap = {
  [color in BaseInputFocusColor]: string;
}

export const outlineColorMap: BaseInputOutlineColorMap = {
  sky : "border-sky-300 hover:border-sky-400",
  red : "border-red-300 hover:border-red-400",
  gray: "border-gray-300 hover:border-gray-400"
};

export const focusColorMap: BaseInputFocusColorMap = {
  sky: "outline-sky-400",
  red: "outline-red-400"
};

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  outlineColor?: BaseInputOutlineColor;
  focusColor?  : BaseInputFocusColor;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({
  className, outlineColor = "gray", focusColor = "sky", ...props
}, ref) => {
  const outlineColorStyles = outlineColorMap[outlineColor];
  const focusColorStyles   = focusColorMap[focusColor];

  return (
    <input 
      {...props} 
      ref       = {ref} 
      className = {twMerge([
        "border rounded-lg px-5 py-3 outline-sky-400", 
        outlineColorStyles,
        focusColorStyles,
        className
      ])} 
    />
  );
});