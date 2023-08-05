"use client";

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type CircularProgressColor   = "sky" | "green" | "black" | "white" | "red" | "gray";
export type CircularProgressVariant = "determinate" | "indeterminate";

export type CircularProgressColorStyleMap = {
  [color in CircularProgressColor]: string;
}

export const colorStyleMap: CircularProgressColorStyleMap = {
  sky  : "text-sky-400",
  green: "text-green-400",
  red  : "text-red-400",
  black: "text-black",
  white: "text-white",
  gray : "text-gray-400"
};

export interface CircularProgressProps {
  color?     : CircularProgressColor;
  percentage?: number;
  variant?   : CircularProgressVariant;
  className? : string;
  thickness? : number;
}

export const CircularProgress = ({ 
  color      = "sky", 
  variant    = "indeterminate",
  percentage = 75,
  thickness  = 3.6,
  className
}: CircularProgressProps) => {
  const colorStyles      = colorStyleMap[color];
  const radius           = 20;
  const strokeDasharray  = useMemo(() => 2 * Math.PI * radius, [radius]);
  const strokeDashoffset = useMemo(() => (100 - percentage) / 100 * strokeDasharray, [percentage, strokeDasharray]);

  return (
    <div className={twMerge(["relative w-[1em] h-[1em]", className])}>
      <svg className={twMerge([colorStyles, variant === "determinate" ? "-rotate-90 transition duration-100" : "animate-circularProgressSpin"])} viewBox="22 22 44 44">
        <circle 
          className        = {twMerge(["stroke-current", variant === "indeterminate" ? "animate-circularProgressStroke" : null])} 
          cx               = "44" 
          cy               = "44" 
          fill             = "none" 
          r                = {radius}
          strokeWidth      = {thickness}
          strokeDasharray  = {variant === "determinate" ? strokeDasharray : undefined}
          strokeDashoffset = {variant === "determinate" ? strokeDashoffset : undefined}
        />
      </svg>
    </div>
  );
};