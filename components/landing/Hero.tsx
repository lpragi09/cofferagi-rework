import Image from "next/image";
import { ArrowRight, BadgeCheck, Flame, Leaf, Coffee } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/cn";
import { getWhatsAppHref } from "@/lib/whatsapp";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  const buyHref = getWhatsAppHref(
    "Olá! Quero comprar um café da Cofferagi. Pode me indicar um clássico e um microlote?",
  );

  return (
    <section id="inicio" className={cn("relative overflow-hidden pt-10 sm:pt-14", className)}>
      {/* Plano de fundo premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_18%_20%,rgba(214,179,106,0.16)_0%,transparent_55%),radial-gradient(55%_55%_at_80%_30%,rgba(255,246,234,0.08)_0%,transparent_60%),linear-gradient(180deg,#0b0a08_0%,#0b0a08_35%,#090807_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--ragi-cream-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ragi-gold)]" />
                Torra pequena. Frescor real. Experiência premium.
              </p>
            </Reveal>

            <Reveal delayMs={90}>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[var(--ragi-cream)] sm:text-5xl lg:text-6xl">
                O café especial que transforma{" "}
                <span className="text-[var(--ragi-gold)]">rotina</span> em ritual.
              </h1>
            </Reveal>

            <Reveal delayMs={150}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_80%,transparent)] sm:text-lg">
                Cafés especiais, torra precisa e notas sensoriais claras. Do grão à xícara, tudo
                pensado para entregar sabor, consistência e sofisticação.
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#cafes"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3",
                    "bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] text-black",
                    "shadow-[0_18px_60px_rgba(214,179,106,0.18)]",
                    "transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70",
                  )}
                >
                  <span className="relative z-10 font-semibold">Explorar cafés</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-white/30"
                    style={{ animation: "ragi-shine 2.6s ease-in-out infinite" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={buyHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[var(--ragi-cream)] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar no WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={280}>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                    <p className="text-sm font-semibold text-[var(--ragi-cream)]">Origem rastreável</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)]">
                    Produtores parceiros e transparência do lote à torra.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                    <p className="text-sm font-semibold text-[var(--ragi-cream)]">Torra na semana</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)]">
                    Equilíbrio ideal entre frescor, doçura e aroma.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                    <p className="text-sm font-semibold text-[var(--ragi-cream)]">Perfil sensorial</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)]">
                    Notas claras e guia de preparo para acerto rápido.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:justify-self-end" delayMs={140}>
            <div className="relative w-full max-w-[440px]">
              <div
                className="absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 20%, rgba(214,179,106,0.26) 0%, transparent 70%), radial-gradient(50% 50% at 80% 60%, rgba(255,246,234,0.10) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="ragi-glow w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative">
                  {/* Imagem responsiva estável (sem `fill`) — evita sumir ao redimensionar */}
                  <Image
                    src="/hero-cup.jpg"
                    alt="Xícara de café especial com grãos ao fundo"
                    width={880}
                    height={1100}
                    priority
                    className="h-auto w-full object-cover opacity-[0.92] [aspect-ratio:4/5]"
                    sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 100vw"
                  />

                  {/* Gradiente para garantir legibilidade do texto sobre a “mesa” */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,8,0.02)_0%,rgba(11,10,8,0.22)_55%,rgba(11,10,8,0.86)_100%)]" />

                  {/* Shine */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 18%, transparent 36%)",
                      animation: "ragi-shine 3.6s ease-in-out infinite",
                    }}
                    aria-hidden="true"
                  />

                  {/* Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold text-[var(--ragi-cream)] backdrop-blur-md">
                    <Coffee className="h-3.5 w-3.5 text-[var(--ragi-gold)]" aria-hidden="true" />
                    Café especial • Premium
                  </div>

                  {/* Texto no rodapé (na área da mesa) */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="max-w-[32ch]">
                      <p className="font-serif text-lg tracking-tight text-[var(--ragi-cream)]">
                        Comprar com curadoria
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                        Recomendações rápidas por WhatsApp, com perfil sensorial e guia de preparo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-6 -top-8 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl lg:grid lg:place-items-center"
                style={{ animation: "ragi-float 6s ease-in-out infinite" }}
                aria-hidden="true"
              >
                <Coffee className="h-7 w-7 text-[var(--ragi-gold)]" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

