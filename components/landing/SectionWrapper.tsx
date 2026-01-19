import * as React from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/landing/Reveal";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-28", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="pb-10 sm:pb-12">
            {eyebrow && (
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-[var(--ragi-cream-2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ragi-gold)]" />
                  {eyebrow}
                </p>
              </Reveal>
            )}
            {title && (
              <Reveal delayMs={90}>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[var(--ragi-cream)] sm:text-4xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {subtitle && (
              <Reveal delayMs={160}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)] sm:text-lg">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

