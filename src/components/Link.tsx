import { ReactNode } from "react";
import NextLink      from "next/link";
import { twMerge }   from "tailwind-merge";

export interface LinkProps {
  className?: string;
  children? : ReactNode;
  href      : string;
}

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink {...props} className={twMerge(["text-gray-600 underline decoration-gray-400 hover:text-gray-800 hover:decoration-gray-800", className])} />
  );
};