import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function WiAlae({ children, duration }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        scale: 1,
        y: -10,
        transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse"
        }
      });
    }
  }, [control, duration, inView]);

  return (
    <motion.div animate={control} ref={ref} initial="">
      {children}
    </motion.div>
  );
}
