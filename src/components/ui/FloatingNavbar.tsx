"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/data";

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <nav
        className="pointer-events-auto flex items-center gap-1 px-5 py-2.5 rounded-full
                   bg-bg-secondary/80 border border-border-subtle backdrop-blur-md shadow-card"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-text-secondary
                       hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
