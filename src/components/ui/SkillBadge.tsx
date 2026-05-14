"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  variant?: "default" | "glow";
}

export default function SkillBadge({ name, variant = "default" }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "border border-border-subtle bg-bg-secondary text-text-secondary",
        "transition-colors duration-200 cursor-default select-none",
        variant === "glow" && "hover:border-accent-purple hover:text-accent-purple hover:shadow-glow-purple",
        variant === "default" && "hover:border-border-accent hover:text-text-primary"
      )}
    >
      {name}
    </motion.span>
  );
}
