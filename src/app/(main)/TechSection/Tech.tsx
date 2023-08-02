import { ReactNode } from "react";

export interface TechProps {
  icon       : ReactNode;
  name       : string;
  description: string;
}

export const Tech = ({ icon, name, description }: TechProps) => {
  return (
    <div className="flex flex-row gap-6 flex-1">
      <div className="flex-0">
        {icon}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};