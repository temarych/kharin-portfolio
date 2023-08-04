import { ReactNode } from "react";

export interface InfoItemProps {
  icon       : ReactNode;
  name       : string;
  description: string;
}

export const InfoItem = ({ icon, name, description }: InfoItemProps) => {
  return (
    <div className="flex flex-row gap-6 flex-1">
      <div className="flex-0">
        {icon}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};