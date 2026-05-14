"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { personalInfo } from "@/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="#8B5CF6"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#3B82F6"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="#06B6D4"
      />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col items-center text-center gap-6 pt-28 pb-16">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     border border-border-accent bg-bg-secondary/60 backdrop-blur-sm
                     text-sm font-medium text-accent-purple"
        >
          <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
          {personalInfo.role}
        </motion.div>

        {/* Main headline */}
        <TextGenerateEffect
          words={personalInfo.tagline}
          className="heading-xl text-text-primary max-w-3xl text-balance"
          duration={0.4}
        />

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed text-balance"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <MagicButton
            title="View Projects"
            href="#projects"
            icon={<ArrowDown size={16} />}
            position="right"
          />
          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-sm font-semibold border border-border-subtle
                       text-text-secondary hover:text-text-primary hover:border-border-accent
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
