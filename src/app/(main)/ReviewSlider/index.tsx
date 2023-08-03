"use client";

import { useRef }                          from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Review }                          from "./Review";

export const ReviewSlider = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  const scale   = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={wrapperRef} className="relative snap-x snap-mandatory overflow-x-auto flex flex-row gap-8 pb-4" style={{ scale, opacity }}>
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
      <Review className="snap-start min-w-full sm:min-w-[25em]" />
    </motion.div>
  );
};