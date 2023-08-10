"use client";

import { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from "react";
import { ButtonContained }                                           from "./ButtonContained";
import { ButtonOutlined }                                            from "./ButtonOutlined";

export type ButtonColor   = "sky" | "red" | "green" | "black";
export type ButtonVariant = "contained" | "outlined";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?         : ButtonColor;
  leftAdornment? : ReactNode;
  rightAdornment?: ReactNode;
}

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
}

const ButtonWithRef = (
  { variant, ...props }: ButtonProps,
  ref                  : ForwardedRef<HTMLButtonElement>
) => {
  switch(variant) {
    case "outlined": return (
      <ButtonOutlined {...props} ref={ref} />
    );
    default: return (
      <ButtonContained {...props} ref={ref} />
    );
  }
};

export const Button = forwardRef(ButtonWithRef);