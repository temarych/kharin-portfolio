"use client";

import { useRef }                          from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { DialColor, Dial }                 from "./Dial";

export interface SkillProps {
  color?     : DialColor;
  name       : string;
  description: string;
  percentage : number;
}

export const Skill = ({ name, description, color, percentage }: SkillProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const scale   = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div className="relative flex flex-col items-center justify-center gap-8" style={{ scale, opacity }}>
      <Dial 
        scrollYProgress = {scrollYProgress} 
        className       = "w-[7em] h-[7em]" 
        labelClassName  = "text-xl"
        color           = {color} 
        percentage      = {percentage} 
        strokeWidth     = {3}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl text-center">{name}</h1>
        <p className="text-center">{description}</p>
      </div>
      <div ref={targetRef} className="absolute pointer-events-none inset-0 top-20 -bottom-20" />
    </motion.div>
  );
};