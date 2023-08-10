import { ReactNode } from "react";

export interface MaskProps {
  children?: ReactNode;
}

export const Mask = ({ children }: MaskProps) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center pointer-events-none p-4">
      <div className="max-w-[80em] w-full h-full flex flex-row items-end justify-end">
        {children}
      </div>
    </div>
  );
};