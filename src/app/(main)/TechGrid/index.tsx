"use client";

import { ReactNode }      from "react";
import { Section }        from "@components/Section";
import { Photoshop }      from "@icons/Photoshop";
import { Illustrator }    from "@icons/Illustrator";
import { Lightroom }      from "@icons/Lightroom";
import { PremierePro }    from "@icons/PremierePro";
import { AfterEffects }   from "@icons/AfterEffects";
import { DaVinciResolve } from "@icons/DaVinciResolve";
import { TechMotion }     from "./TechMotion";

export interface ITech {
  icon       : ReactNode;
  name       : string;
  description: string;
}

export const techs: ITech[] = [
  {
    icon       : <Photoshop className="text-6xl" />,
    name       : "Photoshop",
    description: "I have good skills at Photoshop and can easily edit your pictures or those I took for you"
  },
  {
    icon       : <Illustrator className="text-6xl" />,
    name       : "Illustrator",
    description: "I have good skills at Illustrator and can easily design several products"
  },
  {
    icon       : <Lightroom className="text-6xl" />,
    name       : "Lightroom",
    description: "I have good skills at Lightroom and can easily edit your pictures or those I took for you"
  },
  {
    icon       : <PremierePro className="text-6xl" />,
    name       : "Premiere Pro",
    description: "I have good skills at Premiere Pro and can easily edit your videos or those I took for you"
  },
  {
    icon       : <AfterEffects className="text-6xl" />,
    name       : "After Effects",
    description: "I have good skills at After Effects and can easily edit your videos or those I took for you"
  },
  {
    icon       : <DaVinciResolve className="text-6xl" />,
    name       : "DaVinci Resolve",
    description: "I have good skills at DaVinci Resolve and can easily edit your videos or those I took for you"
  }
];

export const TechGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {techs.map((tech, index) => (
        <TechMotion key={index} {...tech} />
      ))}
    </div>
  );
};