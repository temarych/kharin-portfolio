import { ReactNode } from "react";

export interface GridWrapperProps {
  children?: ReactNode;
}

export const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {children}
    </div>
  );
};