"use client";

import { ReactNode }  from "react";
import { twMerge }    from "tailwind-merge";
import { RadioGroup } from "@headlessui/react";

export interface ToggleGroupProps {
  children?    : ReactNode;
  value?       : string;
  onChange?    : (value: string) => void;
  defaultValue?: string;
  className?   : string;
}

export const ToggleGroup = ({ children, className, ...props }: ToggleGroupProps) => {
  return (
    <RadioGroup {...props} className={twMerge(["flex flex-row", className])}>
      {children}
    </RadioGroup>
  );
};