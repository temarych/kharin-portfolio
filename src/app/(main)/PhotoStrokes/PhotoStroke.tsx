"use client";

import { useRef }                          from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export type PhotoStrokeDirection = "left" | "right";

export interface PhotoStrokeProps {
  direction?: PhotoStrokeDirection;
}

export const PhotoStroke = ({ direction = "right" }: PhotoStrokeProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [direction === "right" ? -500 : 0, direction === "right" ? 0 : -500]);

  return (
    <div ref={targetRef} className="relative overflow-hidden flex">
      <motion.div className="flex flex-row gap-8" style={{ x }}>
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
        <div className="w-[30em] h-[20em] bg-gray-100 rounded-2xl" />
      </motion.div>
    </div>
  );
};