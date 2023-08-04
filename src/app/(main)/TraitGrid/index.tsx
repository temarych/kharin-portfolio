"use client";

import { ReactNode }      from "react";
import { 
  HiOutlineBriefcase, 
  HiOutlineLightningBolt, 
  HiOutlineSparkles 
}                         from "react-icons/hi";
import { InfoItemMotion } from "../TechGrid/InfoItemMotion";
import { GridWrapper }    from "../TechGrid/GridWrapper";

export interface ITrait {
  icon       : ReactNode;
  name       : string;
  description: string;
}

export const traits: ITrait[] = [
  {
    icon       : <HiOutlineLightningBolt className="text-5xl" />,
    name       : "Speed",
    description: "I work very efficiently and make anything very quickly"
  },
  {
    icon       : <HiOutlineBriefcase className="text-5xl" />,
    name       : "Reliability",
    description: "I work very efficiently and make anything very quickly"
  },
  {
    icon       : <HiOutlineSparkles className="text-5xl" />,
    name       : "Perfectionism",
    description: "I work very efficiently and make anything very quickly"
  },
  {
    icon       : <HiOutlineLightningBolt className="text-5xl" />,
    name       : "Speed",
    description: "I work very efficiently and make anything very quickly"
  },
  {
    icon       : <HiOutlineBriefcase className="text-5xl" />,
    name       : "Reliability",
    description: "I work very efficiently and make anything very quickly"
  },
  {
    icon       : <HiOutlineSparkles className="text-5xl" />,
    name       : "Perfectionism",
    description: "I work very efficiently and make anything very quickly"
  }
];

export const TraitGrid = () => {
  return (
    <GridWrapper>
      {traits.map((trait, index) => (
        <InfoItemMotion key={index} {...trait} />
      ))}
    </GridWrapper>
  );
};