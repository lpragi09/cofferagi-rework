import { Instagram, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function Footer() {
  const waHref = getWhatsAppHref("Olá! Quero comprar um café da Cofferagi. Pode me ajudar?");

  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(18,16,13,0.9),rgba(12,10,8,1))]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-lg tracking-tight text-[var(--ragi-cream)]">Cofferagi</p>
            <p className="mt-1 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)]">
              Café especial do Sul de Minas, com produção própria em Três Pontas - MG.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <p className="text-xs font-extrabold tracking-[0.18em] text-[var(--ragi-gold)]">CONTATO</p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ragi-cream)] hover:text-[var(--ragi-cream-2)]"
            >
              (35) 9 8887-7102
            </a>
            <a
              href="mailto:contato@cofferagi.com"
              className="text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)] hover:text-[var(--ragi-cream)]"
            >
              contato@cofferagi.com
            </a>
          </div>

          <div className="grid gap-2 sm:justify-items-end">
            <p className="text-xs font-extrabold tracking-[0.18em] text-[var(--ragi-gold)]">
              REDES SOCIAIS
            </p>
            <div className="flex items-center gap-3">
              <a
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[var(--ragi-cream)] transition hover:bg-white/10"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[var(--ragi-cream)] transition hover:bg-white/10"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[var(--ragi-cream)] transition hover:bg-white/10"
                href="mailto:contato@cofferagi.com"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[color:color-mix(in_oklab,var(--ragi-cream)_60%,transparent)]">
          © {new Date().getFullYear()} Cofferagi. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

