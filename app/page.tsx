import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { CoffeeCatalog } from "@/components/landing/CoffeeCatalog";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--ragi-bg)] font-sans text-[var(--ragi-cream)]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_-10%,rgba(214,179,106,0.16)_0%,transparent_60%)]" />

      {/* Navbar (sticky + glass) e seções com foco em conversão (Estilo Ragi) */}
      <Landing />
    </div>
  );
}

function Landing() {
  // Mantemos como componente local (server) para facilitar leitura e evitar "use client" global.
  // Se preferir, dá para mover para `components/landing/LandingPage.tsx`.
  const buyHref = getWhatsAppHref(
    "Olá! Quero comprar um café da Cofferagi. Pode me ajudar com as opções?",
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <SectionWrapper
            id="cafes"
            className="py-16 sm:py-20"
            eyebrow="Nossos Cafés"
            title="Catálogo elegante, com perfis que fazem sentido."
            subtitle="Escolha por estilo e intensidade. A gente entrega com guia de preparo e torra na semana para consistência de cafeteria."
          >
            <CoffeeCatalog />
          </SectionWrapper>

          <SectionWrapper
            id="processo"
            className="py-16 sm:py-20"
            eyebrow="Nosso Processo"
            title="Do grão à xícara, sem atalhos."
            subtitle="Uma operação pequena, mas criteriosa: seleção, torra, descanso e embalagem pensados para preservar aroma e doçura."
          >
            <ProcessSteps />
          </SectionWrapper>

          <SectionWrapper
            id="sobre"
            className="py-16 sm:py-20"
            eyebrow="Sobre Nós"
            title="Café especial com origem e história."
            subtitle="De Três Pontas (Sul de Minas - MG) para a sua xícara: produção própria, mais de 20 anos de experiência e um padrão de qualidade que dá orgulho."
          >
            <AboutSection />
          </SectionWrapper>

          <SectionWrapper
            id="contato"
            className="py-16 sm:py-20"
            eyebrow="Contato"
            title="Quer comprar? A gente monta sua rotina."
            subtitle="Deixe seu contato e diga como você prepara. Recomendamos cafés e ajustes para acertar de primeira."
          >
            <ContactForm />
          </SectionWrapper>

          <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(214,179,106,0.16),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl sm:p-9">
              <div
                className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(214,179,106,0.22), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-2xl tracking-tight text-[var(--ragi-cream)]">
                    Receba cafés incríveis no ponto certo.
                  </p>
                  <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                    Compra rápida no WhatsApp, perfil sensorial claro e guia de preparo.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="#cafes"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-[var(--ragi-cream)] transition hover:bg-white/10"
                  >
                    Ver catálogo
                  </a>
                  <a
                    href={buyHref}
                    className="rounded-2xl bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] px-6 py-3 text-center text-sm font-extrabold text-black transition hover:brightness-[1.05]"
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
      </main>

      <Footer />
    </>
  );
}
