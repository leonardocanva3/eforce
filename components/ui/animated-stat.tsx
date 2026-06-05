"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedStatProps = {
  prefix?: string;
  suffix?: string;
  text?: string;
  value?: number;
};

const formatter = new Intl.NumberFormat("pt-BR");

export function AnimatedStat({
  prefix = "",
  suffix = "",
  text,
  value,
}: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || value === undefined || shouldReduceMotion) return;

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, shouldReduceMotion, value]);

  const visibleValue =
    shouldReduceMotion && value !== undefined ? value : displayValue;

  return (
    <motion.p
      animate={{
        opacity: shouldReduceMotion || isInView ? 1 : 0,
        y: shouldReduceMotion || isInView ? 0 : 8,
      }}
      className="display-title text-4xl"
      ref={ref}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
    >
      {text ?? `${prefix}${formatter.format(visibleValue)}${suffix}`}
    </motion.p>
  );
}
