import { motion, useTransform, MotionValue } from "framer-motion";
import { Tech }                              from "./Tech";
import { ITech }                             from ".";

export interface TechMotionProps extends ITech {
  order          : number;
  amount         : number;
  scrollYProgress: MotionValue<number>;
}

export const TechMotion = ({ order, amount, scrollYProgress, ...props }: TechMotionProps) => {
  const scale   = useTransform(scrollYProgress, [0, order / amount], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, order / amount], [0, 1]);

  return (
    <motion.div style={{ scale, opacity }}>
      <Tech {...props} />
    </motion.div>
  );
};