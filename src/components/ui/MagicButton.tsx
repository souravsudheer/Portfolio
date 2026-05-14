"use client";

import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  href?: string;
  variant?: "primary" | "outline";
}

export default function MagicButton({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
  href,
  variant = "primary",
}: MagicButtonProps) {
  const inner = (
    <span
      className={cn(
        "magic-btn-inner flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "primary"
          ? "bg-bg-primary text-text-primary"
          : "bg-transparent text-text-primary",
        otherClasses
      )}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </span>
  );

  const wrapper = (
    <div className="magic-btn-wrapper inline-flex cursor-pointer">
      {inner}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex" onClick={handleClick}>
        {wrapper}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className="inline-flex">
      {wrapper}
    </button>
  );
}
