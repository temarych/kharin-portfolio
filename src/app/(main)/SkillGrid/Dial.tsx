"use client";

import { useMemo }                           from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { twMerge }                           from "tailwind-merge";

export type DialColor = "sky" | "red" | "purple";

export type DialColorMap = {
  [color in DialColor]: {
    track: string;
    bar  : string;
  };
}

export const dialColorMap: DialColorMap = {
  sky   : {
    track: "text-sky-300",
    bar  : "text-sky-500"
  },
  red   : {
    track: "text-red-300",
    bar  : "text-red-500"
  },
  purple : {
    track: "text-purple-300",
    bar  : "text-purple-500"
  },
};

export interface DialProps {
  scrollYProgress: MotionValue<number>;
  className?     : string;
  labelClassName?: string;
  color?         : DialColor;
  percentage?    : number;
  strokeWidth?   : number;
}

export const Dial = ({ scrollYProgress, className, labelClassName, color = "sky", percentage = 75, strokeWidth = 4 }: DialProps) => {
  const colorStyles      = dialColorMap[color];
  const radius           = 20;
  const strokeDasharray  = useMemo(() => 2 * Math.PI * radius, [radius]);
  const strokeDashoffset = useTransform(scrollYProgress, progress => strokeDasharray - percentage / 100 * strokeDasharray * progress);

  return (
    <motion.div className={twMerge(["relative w-[1em] h-[1em]", className])}>
      <svg className="-rotate-90 transition duration-100" viewBox="22 22 44 44">
        <motion.circle
          className   = {twMerge(["stroke-current", colorStyles.track])}
          cx          = "44" 
          cy          = "44" 
          fill        = "none" 
          r           = {radius}
          strokeWidth = {strokeWidth}
        />
        <motion.circle
          className        = {twMerge(["stroke-current absolute inset-0", colorStyles.bar])}
          cx               = "44" 
          cy               = "44" 
          fill             = "none" 
          r                = {radius}
          strokeWidth      = {strokeWidth}
          strokeDasharray  = {strokeDasharray}
          strokeDashoffset = {strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className={twMerge(["text-gray-400", labelClassName])}>{percentage}%</h1>
      </div>
    </motion.div>
  );
};