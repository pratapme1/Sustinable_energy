"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function SlideContainer({ children, direction }: SlideContainerProps) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }}
      className="absolute inset-0 flex flex-col overflow-y-auto overflow-x-hidden p-6 pb-28 md:p-10 md:pb-28 lg:p-12 lg:pb-24"
    >
      <div className="m-auto flex w-full max-w-7xl flex-col justify-center min-h-max">
        {children}
      </div>
    </motion.div>
  );
}
