import { useRef }                          from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tech }                            from "./Tech";
import { ITech }                           from ".";

export type TechMotionProps = ITech;

export const TechMotion = ({ ...props }: TechMotionProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  const scale   = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={wrapperRef} style={{ scale, opacity }}>
      <Tech {...props} />
    </motion.div>
  );
};