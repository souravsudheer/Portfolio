"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export default function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: (i) => i * 0.1,
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block mr-[0.25em]"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
