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
          // Só "reseta" quando sair de verdade da viewport.
          // Isso evita flicker quando o usuário está rolando devagar.
          if ((entry?.intersectionRatio ?? 0) === 0) setRevealed(false);
        }
      },
      // Dispara mais cedo (evita parecer que anima só no meio)
      { threshold: 0.02, rootMargin: "22% 0px -18% 0px" },
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

