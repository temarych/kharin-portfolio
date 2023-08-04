import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge }                         from "tailwind-merge";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className, ...props
}, ref) => {
  return (
    <input {...props} ref={ref} className={twMerge(["border rounded-lg px-6 py-3 outline-sky-400", className])} />
  );
});