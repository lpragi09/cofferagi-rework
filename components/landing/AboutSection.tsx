import { Quote, ShieldCheck, Timer, Truck } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

export function AboutSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-7">
        <Reveal>
          <div className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-[var(--ragi-gold)]" aria-hidden="true" />
            <p className="text-sm font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
              Sobre a Cofferagi
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <h3 className="mt-4 font-serif text-2xl tracking-tight text-[var(--ragi-cream)]">
            Produção própria no Sul de Minas. Qualidade que atravessa gerações.
          </h3>
        </Reveal>

        <Reveal delayMs={180}>
          <p className="mt-4 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
            A Cofferagi é de <span className="font-semibold text-[var(--ragi-cream)]">Três Pontas - MG</span>,
            no coração do <span className="font-semibold text-[var(--ragi-cream)]">Sul de Minas</span>. Nós mesmos
            produzimos nossos cafés e carregamos{" "}
            <span className="font-semibold text-[var(--ragi-cream)]">mais de 20 anos</span> de experiência
            cultivando e aprimorando cada safra.
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <p className="mt-4 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
            Nosso foco é <span className="font-semibold text-[var(--ragi-cream)]">café especial</span>: do manejo
            à colheita, do pós-colheita ao perfil final na xícara. A gente traduz essa qualidade em
            perfis sensoriais claros e recomendações simples, para você repetir uma xícara excelente
            no seu método (V60, prensa ou espresso).
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal delayMs={80}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[var(--ragi-gold)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--ragi-cream)]">Qualidade & consistência</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              Da fazenda à torra: controle e prova constante para manter o padrão da xícara.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-[var(--ragi-gold)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--ragi-cream)]">Torra na semana</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              O ponto certo de descanso e envio para você receber no pico de sabor.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-[var(--ragi-gold)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--ragi-cream)]">Entrega bem cuidada</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              Embalagem com válvula e proteção para preservar aroma do primeiro ao último dia.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={260}>
          <div className="h-full rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(214,179,106,0.14),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl">
            <p className="font-serif text-2xl tracking-tight text-[var(--ragi-cream)]">+20 anos</p>
            <p className="mt-1 text-sm font-semibold text-[var(--ragi-cream)]">produzindo cafés excelentes</p>
            <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              Tradição no Sul de Minas com olhar de qualidade para cada detalhe — safra após safra.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

