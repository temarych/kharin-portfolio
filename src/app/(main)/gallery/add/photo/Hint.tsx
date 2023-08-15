"use client";

import { ReactNode } from "react";

export interface HintProps {
  icon       : ReactNode;
  title      : string;
  description: string;
}

export const Hint = ({ icon, title, description }: HintProps) => {
  return (
    <div className="flex flex-row gap-4">
      {icon}
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};