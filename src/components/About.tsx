"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { bentoItems } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-purple uppercase mb-3">
            Who I Am
          </p>
          <h2 className="heading-lg text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <BentoGrid>
            {bentoItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <BentoGridItem item={item} />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
