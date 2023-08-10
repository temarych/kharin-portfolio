"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiChevronUp }             from "react-icons/hi";
import { FloatingButton }          from "@components/FloatingButton";
import { Mask }                    from "@components/Mask";

export interface AnchorMaskProps {
  isAnchorShown?: boolean;
}

export const AnchorMask = ({ isAnchorShown }: AnchorMaskProps) => {
  return (
    <Mask>
      <AnimatePresence>
        {isAnchorShown && (
          <motion.div 
            initial = {{ scale: 0.5, opacity: 0 }} 
            animate = {{ scale: 1, opacity: 1 }} 
            exit    = {{ scale: 0, opacity: 0 }}
          >
            <FloatingButton 
              className = "pointer-events-auto" 
              onClick   = {() => window.scrollTo({ 
                top     : 0, 
                behavior: "smooth"
              })}
            >
              <HiChevronUp className="text-2xl" />
            </FloatingButton>
          </motion.div>
        )}
      </AnimatePresence>
    </Mask>
  );
};