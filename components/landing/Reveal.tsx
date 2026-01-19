"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Atraso em ms, útil para escalonar animações dentro de uma seção.
   */
  delayMs?: number;
  /**
   * Se true, anima apenas na primeira vez que aparecer.
   */
  once?: boolean;
};

export function Reveal({ children, className, delayMs = 0, once = false }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setRevealed(true);
          if (once) io.disconnect();
        } else if (!once) {
          setRevealed(false);
        }
      },
      // Dispara mais cedo (evita parecer que anima só no meio)
      { threshold: 0.06, rootMargin: "10% 0px -25% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("ragi-reveal", className)}
      data-revealed={revealed ? "true" : "false"}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

