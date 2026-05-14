"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden group"
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #06B6D4)",
        }}
      />

      {/* Featured badge */}
      {project.featured && (
        <span className="self-start px-2.5 py-0.5 rounded-full text-xs font-semibold
                         bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
          Featured
        </span>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs font-mono font-medium
                       bg-bg-tertiary text-text-muted border border-border-subtle"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1 border-t border-border-subtle">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary
                     hover:text-text-primary transition-colors duration-200"
        >
          <Github size={15} />
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent-purple
                       hover:text-accent-blue transition-colors duration-200"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-cyan uppercase mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="heading-lg text-text-primary">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
