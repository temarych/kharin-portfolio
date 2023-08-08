import { twMerge } from "tailwind-merge";

export interface DividerProps {
  className?: string;
} 

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr className={className} />
  );
};