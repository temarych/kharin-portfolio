import { ReactNode } from "react";
import NextLink      from "next/link";
import { twMerge }   from "tailwind-merge";

export interface LinkProps {
  className?: string;
  children? : ReactNode;
  href?     : string;
  onClick?  : () => void;
}

export const Link = ({ className, href, onClick, children }: LinkProps) => {
  const styles = twMerge(["text-gray-600 underline decoration-gray-400 hover:text-gray-800 hover:decoration-gray-800 cursor-pointer", className]);

  return href ? (
    <NextLink 
      href      = {href} 
      className = {styles} 
      onClick   = {onClick}
    >
      {children}
    </NextLink>
  ) : (
    <p
      className = {styles} 
      onClick   = {onClick}
    >
      {children}
    </p>
  );
};