"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education } from "@/data";
import type { EducationItem } from "@/types";

function EducationCard({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isEdu = item.type === "education";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      className={`glass-card p-6 relative overflow-hidden`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl
                    ${isEdu ? "bg-accent-purple" : "bg-accent-blue"}`}
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                      ${isEdu
                        ? "bg-accent-purple/15 text-accent-purple"
                        : "bg-accent-blue/15 text-accent-blue"
                      }`}
        >
          {isEdu ? <GraduationCap size={18} /> : <Award size={18} />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-text-primary leading-snug">
              {item.title}
            </h3>
            <span
              className={`flex-shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full
                          ${isEdu
                            ? "bg-accent-purple/10 text-accent-purple"
                            : "bg-accent-blue/10 text-accent-blue"
                          }`}
            >
              {isEdu ? "Education" : "Certification"}
            </span>
          </div>

          <p className="text-sm font-medium text-text-secondary mb-1">
            {item.institution}
          </p>
          <p className="text-xs text-text-muted mb-3">{item.period}</p>

          {item.description && (
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              {item.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {item.grade && (
              <span className="text-sm font-semibold text-accent-purple">
                {item.grade}
              </span>
            )}
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent-blue
                           hover:text-accent-cyan transition-colors duration-200"
              >
                <ExternalLink size={12} />
                View Credential
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  const degrees = education.filter((e) => e.type === "education");
  const certs = education.filter((e) => e.type === "certification");

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-purple uppercase mb-3">
            Background
          </p>
          <h2 className="heading-lg text-text-primary">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education column */}
          {degrees.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
                Academic
              </h3>
              <div className="flex flex-col gap-4">
                {degrees.map((item, i) => (
                  <EducationCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* Certifications column */}
          {certs.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certs.map((item, i) => (
                  <EducationCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
