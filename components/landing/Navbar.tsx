"use client";

import * as React from "react";
import { Menu, X, Coffee, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { getWhatsAppHref } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Nossos Cafés", href: "#cafes" },
  { label: "Nosso Processo", href: "#processo" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const buyHref = getWhatsAppHref(
    "Olá! Quero comprar um café da Cofferagi. Pode me ajudar a escolher o melhor perfil?",
  );

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Mantém a ilusão de flutuar, mas sem “faixa” fora da paleta */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,10,8,0.92)_0%,rgba(11,10,8,0.55)_45%,transparent_100%)]" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
            "shadow-[0_14px_60px_rgba(0,0,0,0.35)]",
          )}
        >
          <div className="flex h-14 items-center justify-between gap-3 px-3 sm:h-16 sm:px-4">
            <a
              href="#inicio"
              className="group flex items-center gap-2 rounded-xl px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70"
              onClick={() => setOpen(false)}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
                <Coffee className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-base tracking-tight text-[var(--ragi-cream)] sm:text-lg">
                  Cofferagi
                </span>
                <span className="block text-[11px] font-medium tracking-wide text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
                  café especial
                </span>
              </span>
            </a>

            {/* Desktop */}
            <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Navegação principal">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)] transition hover:bg-white/8 hover:text-[var(--ragi-cream)] focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={buyHref}
                className={cn(
                  "ml-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold",
                  "bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] text-black",
                  "shadow-[0_10px_30px_rgba(214,179,106,0.18)]",
                  "transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Comprar
              </a>
            </nav>

            {/* Mobile */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[var(--ragi-cream)] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70 lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          {/* Painel mobile (h-[50vh]) */}
          <div
            className={cn(
              "relative overflow-hidden lg:hidden",
              "transition-[max-height,opacity] duration-300 ease-out",
              open ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0",
            )}
            aria-hidden={!open}
          >
            <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_10%,rgba(214,179,106,0.14)_0%,transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            <div className="relative grid h-[50vh] grid-rows-[1fr_auto] gap-4 border-t border-white/10 px-4 py-4">
              <div className="grid content-start gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--ragi-cream)] transition hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="grid gap-2 pb-1">
                <a
                  href="#cafes"
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-center text-sm font-semibold text-[var(--ragi-cream)] transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  Ver catálogo
                </a>
                <a
                  href={buyHref}
                  className="rounded-xl bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] px-4 py-3 text-center text-sm font-extrabold text-black transition hover:brightness-[1.05]"
                  onClick={() => setOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

