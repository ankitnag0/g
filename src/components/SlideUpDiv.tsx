"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SlideUpDivProps {
  children: React.ReactNode;
  initialY?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const SlideUpDiv: React.FC<SlideUpDivProps> = ({
  children,
  initialY = 50,
  duration = 0.6,
  delay = 0,
  className,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Triggers when 50% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={controls}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpDiv;
