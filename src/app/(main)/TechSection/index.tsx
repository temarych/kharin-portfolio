"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Photoshop }         from "@icons/Photoshop";
import { Illustrator }       from "@icons/Illustrator";
import { Lightroom }         from "@icons/Lightroom";
import { PremierePro }       from "@icons/PremierePro";
import { AfterEffects }      from "@icons/AfterEffects";
import { DaVinciResolve }    from "@icons/DaVinciResolve";
import { TechMotion }        from "./TechMotion";

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
    name       : "After Effect",
    description: "I have good skills at After Effects and can easily edit your videos or those I took for you"
  },
  {
    icon       : <DaVinciResolve className="text-6xl" />,
    name       : "DaVinci Resolve",
    description: "I have good skills at DaVinci Resolve and can easily edit your videos or those I took for you"
  }
];

export const TechSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  return (
    <section className="w-full py-24 px-4 flex flex-row justify-center">
      <div className="w-full max-w-[80em] flex flex-col gap-16">
        <motion.h1 className="font-bold text-3xl text-center">Technologies</motion.h1>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {techs.map((tech, index) => (
              <TechMotion
                {...tech}
                key             = {index}
                order           = {index + 1}
                amount          = {techs.length}
                scrollYProgress = {scrollYProgress}
              />
            ))}
          </div>
          <div 
            ref       = {sectionRef} 
            className = "absolute inset-0 -bottom-36 pointer-events-none" 
          />
        </div>
      </div>
    </section>
  );
};