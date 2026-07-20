"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type GradientOrbProps = {
  className?: string;
  variant?: "violet" | "lilac" | "azure";
  size?: number;
};

const variantColor: Record<string, string> = {
  violet: "rgba(124,77,255,0.45)",
  lilac: "rgba(201,169,247,0.4)",
  azure: "rgba(42,37,112,0.55)",
};

/**
 * GradientOrb — elemento assinatura da marca Luvia.
 * "Luvia" evoca luz + caminho: um halo suave que respira lentamente
 * ao fundo das seções, como um facho de luz difusa. Usado com
 * moderação, nunca como decoração repetida sem função.
 */
export default function GradientOrb({
  className,
  variant = "violet",
  size = 560,
}: GradientOrbProps) {
  return (
    <motion.div
      aria-hidden
      className={clsx("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${variantColor[variant]} 0%, transparent 70%)`,
      }}
      animate={{
        opacity: [0.55, 0.85, 0.55],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
