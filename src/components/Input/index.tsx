import { forwardRef }                from "react";
import { twMerge }                   from "tailwind-merge";
import { BaseInput, BaseInputProps } from "./BaseInput";

export type InputHelperTextColor = "sky" | "red" | "gray";

export type InputHelperTextColorMap = {
  [color in InputHelperTextColor]: string;
}

export const helperTextColorMap: InputHelperTextColorMap = {
  sky : "text-sky-400",
  red : "text-red-400",
  gray: "text-gray-400"
};

export interface InputProps extends BaseInputProps {
  helperText?     : string;
  helperTextColor?: InputHelperTextColor;
  hasError?       : boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  helperText, hasError, 
  outlineColor    = hasError ? "red" : "gray", 
  focusColor      = hasError ? "red" : "sky", 
  helperTextColor = hasError ? "red" : "gray",
  ...props
}, ref) => {
  const helperTextColorStyles = helperTextColorMap[helperTextColor];

  return (
    <div className="flex flex-col gap-2">
      <BaseInput 
        {...props} 
        ref          = {ref} 
        outlineColor = {outlineColor} 
        focusColor   = {focusColor} 
      />
      {helperText && (
        <h1 className={twMerge(["text-sm pl-6", helperTextColorStyles])}>
          {helperText}
        </h1>
      )}
    </div>
  );
});