"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import MagicButton from "@/components/ui/MagicButton";
import { personalInfo, socialLinks } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
  Email: <Mail size={20} />,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-purple uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="heading-lg text-text-primary mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            I&apos;m open to internships, graduate roles, research collaborations, or simply a good
            conversation about data. Reach out — I&apos;d love to hear from you.
          </p>

          {/* Email display */}
          <div
            className="inline-flex items-center gap-2 px-5 py-3 mb-8 rounded-full
                       border border-border-accent bg-bg-secondary/60 backdrop-blur-sm
                       text-text-secondary text-sm"
          >
            <Mail size={15} className="text-accent-purple" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-text-primary transition-colors duration-200"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-10">
            <MagicButton
              title="Say Hello"
              href={`mailto:${personalInfo.email}`}
              icon={<ArrowRight size={16} />}
              position="right"
            />
          </div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-11 h-11 rounded-full flex items-center justify-center
                           border border-border-subtle bg-bg-secondary text-text-secondary
                           hover:border-accent-purple hover:text-accent-purple
                           transition-colors duration-200"
                aria-label={social.name}
              >
                {iconMap[social.name] ?? <Mail size={18} />}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
