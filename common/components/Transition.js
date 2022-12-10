import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const Transition = ({ children }) => {
  const { location } = useRouter();
  const variants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="out"
          animate="in"
          exit="out"
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
