"use client";

import { Fragment, ReactNode } from "react";
import { twMerge }             from "tailwind-merge";
import { RadioGroup }          from "@headlessui/react";

export interface ToggleOptionProps {
  value      : string;
  icon       : ReactNode;
  checkedIcon: ReactNode;
}

export const ToggleOption = ({ value, icon, checkedIcon }: ToggleOptionProps) => {
  return (
    <RadioGroup.Option value={value} as={Fragment}>
      {({ checked, active }) => (
        <div 
          className={twMerge([
            "w-12 h-12 flex flex-col items-center justify-center",
            "cursor-pointer outline-gray-600 transition duration-75 text-gray-600",
            "last-of-type:rounded-r-xl first-of-type:rounded-l-xl",
            "border border-gray-200 first-of-type:ml-0 -ml-[1px]",
            active ? "z-[1]" : null,
            checked ? "bg-gray-100" : "hover:bg-gray-50",
          ])} 
        >
          {checked ? checkedIcon : icon}
        </div>
      )}
    </RadioGroup.Option>
  );
};