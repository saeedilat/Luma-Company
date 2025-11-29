"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Reveal({ children }) {
  const controls = useAnimation();
  const [ref, inViwe] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inViwe) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inViwe]);
  return (
    <div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
