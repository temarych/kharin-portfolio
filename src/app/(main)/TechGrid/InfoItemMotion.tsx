import { useRef }                          from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfoItem, InfoItemProps }         from "@components/InfoItem";

export type InfoItemMotionProps = InfoItemProps;

export const InfoItemMotion = ({ ...props }: InfoItemMotionProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"]
  });

  const scale   = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={wrapperRef} style={{ scale, opacity }}>
      <InfoItem {...props} />
    </motion.div>
  );
};