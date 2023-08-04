import { ReactNode } from "react";
import { twMerge }   from "tailwind-merge";

export interface SectionProps {
  children? : ReactNode;
  title?    : string;
  className?: string;
  isFilled? : boolean;
}

export const Section = ({ title, children, className, isFilled }: SectionProps) => {
  return (
    <section className={twMerge(["w-full px-4 py-24 flex flex-row justify-center overflow-x-clip", isFilled ? "bg-gray-50" : null, className])}>
      <div className={twMerge(["w-full max-w-[80em] flex flex-col gap-16"])}>
        <h1 className="font-bold text-2xl text-center">{title}</h1>
        {children}
      </div>
    </section>
  );
};