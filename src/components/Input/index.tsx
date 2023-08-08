"use client";

import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from "react";
import { Field, FieldProps }                                      from "../Field";
import { twMerge } from "tailwind-merge";

export interface InputProps extends Omit<FieldProps & InputHTMLAttributes<HTMLInputElement>, "children" | "isFocused" | "value" | "onChange" | "defaultValue"> {
  value?       : string;
  defaultValue?: string;
  onChange?    : (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className, 
  leftAdornment, 
  rightAdornment, 
  helperText,
  hasError,
  helperTextColor,
  outlineColor, 
  focusColor,
  onChange,
  onBlur,
  onFocus,
  value       : propValue, 
  defaultValue: propDefaultValue,
  ...props
}, ref) => {
  const isControlled                = propValue !== undefined;
  const defaultValue                = propDefaultValue ?? "";
  const [isFocused, setIsFocused]   = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const value                       = isControlled ? propValue : innerValue;

  return (
    <Field 
      leftAdornment   = {leftAdornment}
      rightAdornment  = {rightAdornment}
      className       = {className}
      helperText      = {helperText}
      hasError        = {hasError}
      helperTextColor = {helperTextColor}
      outlineColor    = {outlineColor}
      focusColor      = {focusColor}
      isFocused       = {isFocused}
    >
      <input 
        {...props} 
        ref       = {ref} 
        className = {twMerge([
          "w-full flex-1 flex flex-row items-center outline-none",
          leftAdornment ? "pl-[3em]" : "pl-4",
          rightAdornment ? "pr-[3em]" : "pr-4",
          hasError ? "placeholder:text-red-400" : null
        ])}
        value     = {value}
        onChange  = {event => {
          !isControlled && setInnerValue(event.target.value);
          onChange && onChange(event, value);
        }}
        onFocus   = {event => {
          setIsFocused(true);
          onFocus && onFocus(event);
        }}
        onBlur    = {event => {
          setIsFocused(false);
          onBlur && onBlur(event);
        }}
      />
    </Field>
  );
});