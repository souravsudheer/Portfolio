"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="heading-lg text-text-primary">
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.12, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold tracking-wider text-accent-purple uppercase mb-4">
                {cat.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.div key={skill.name} variants={badgeVariants}>
                    <SkillBadge name={skill.name} variant="glow" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
