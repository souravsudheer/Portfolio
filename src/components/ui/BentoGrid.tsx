"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { BentoItem } from "@/types";

const GlobeCard = dynamic(() => import("./GlobeCard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
      Loading…
    </div>
  ),
});

// Catches WebGL / R3F runtime errors so they don't crash the whole page
class GlobeErrorBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-muted">
          <span className="text-3xl">🌏</span>
          <span className="text-xs">3D not available</span>
        </div>
      );
    }
    return this.props.children;
  }
}

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[minmax(140px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  item: BentoItem;
}

export function BentoGridItem({ item }: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={item.type !== "globe" ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "glass-card p-6 flex flex-col justify-between overflow-hidden",
        "relative group",
        item.className
      )}
    >
      {/* Subtle hover glow */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      {item.type === "globe" ? (
        <div className="globe-canvas w-full flex-1 min-h-[180px]">
          <GlobeErrorBoundary>
            <GlobeCard />
          </GlobeErrorBoundary>
        </div>
      ) : item.type === "code" ? (
        <CodeCard item={item} />
      ) : (
        <TextCard item={item} />
      )}
    </motion.div>
  );
}

function TextCard({ item }: { item: BentoItem }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary leading-snug mb-2">
        {item.title}
      </h3>
      {item.description && (
        <p className="text-sm text-text-secondary leading-relaxed">
          {item.description}
        </p>
      )}
    </div>
  );
}

function CodeCard({ item }: { item: BentoItem }) {
  const skills = item.description.split(" · ");
  return (
    <>
      <h3 className="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium
                       bg-bg-tertiary border border-border-accent text-accent-purple"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
