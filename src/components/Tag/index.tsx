import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="border border-gray-200 rounded-lg px-2 py-1">
      <h1 className="text-gray-600 text-sm">{children}</h1>
    </div>
  );
};