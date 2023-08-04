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
    <NextLink {...props} className={twMerge(["text-sky-400 underline decoration-sky-200 hover:decoration-sky-400", className])} />
  );
};