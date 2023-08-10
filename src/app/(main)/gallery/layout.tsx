"use client";

import { Fragment, ReactNode } from "react";
import { AnimatePresence }     from "framer-motion";

export interface GalleryLayoutProps {
  photo   : ReactNode;
  children: ReactNode;
}

const GalleryLayout = ({ photo, children }: GalleryLayoutProps) => {
  return (
    <Fragment>
      <AnimatePresence>
        {photo}
      </AnimatePresence>
      {children}
    </Fragment>
  );
};

export default GalleryLayout;