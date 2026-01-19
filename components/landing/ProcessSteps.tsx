import { Coffee, Flame, Droplets, Package, Sparkles } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const STEPS = [
  {
    title: "Seleção do grão",
    desc: "Triagem e parceria com produtores que priorizam qualidade e rastreabilidade.",
    icon: Coffee,
  },
  {
    title: "Torra precisa",
    desc: "Perfis calibrados para realçar doçura e notas sensoriais com consistência.",
    icon: Flame,
  },
  {
    title: "Descanso ideal",
    desc: "Tempo certo para estabilizar gases e entregar uma xícara mais doce e limpa.",
    icon: Sparkles,
  },
  {
    title: "Embalagem protegida",
    desc: "Válvula unidirecional e barreira de oxigênio para preservar aroma e frescor.",
    icon: Package,
  },
  {
    title: "Do grão à xícara",
    desc: "Guia de preparo simples para você acertar rápido em V60, prensa ou espresso.",
    icon: Droplets,
  },
] as const;

export function ProcessSteps() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {STEPS.map((s, idx) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.title} delayMs={80 + idx * 70}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/7">
              <div className="flex items-center justify-between gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-[var(--ragi-gold)]" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-bold text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-xl tracking-tight text-[var(--ragi-cream)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                {s.desc}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

