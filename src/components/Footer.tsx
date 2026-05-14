"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github size={16} />,
  LinkedIn: <Linkedin size={16} />,
  Email: <Mail size={16} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {year} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-purple transition-colors duration-200"
              aria-label={social.name}
            >
              {iconMap[social.name] ?? <Mail size={16} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
