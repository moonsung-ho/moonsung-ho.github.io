import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function AnimatedOnScroll({ children, duration }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: duration }
      });
    } else {
      control.start({
        opacity: 0,
        scale: 1,
        y: 10,
        transition: { duration: duration }
      });
    }
  }, [duration, control, inView]);

  return (
    <motion.div animate={control} ref={ref} initial="hidden">
      {children}
    </motion.div>
  );
}
