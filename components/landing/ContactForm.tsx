"use client";

import * as React from "react";
import { Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/landing/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    try {
      // Placeholder (Supabase):
      // - Crie uma tabela `leads` com RLS habilitado e policy adequada.
      // - Preferencialmente, faça o insert via Route Handler (server) para validar/limitar rate.
      // Exemplo futuro:
      // const supabase = createSupabaseBrowserClient()
      // await supabase.from("leads").insert({ name, email, phone, notes })

      await new Promise((r) => setTimeout(r, 700));

      if (!name || !email) {
        throw new Error("Por favor, preencha nome e e-mail.");
      }

      console.log("[LEAD - placeholder]", { name, email, phone, notes });

      setStatus("sent");
      setMessage("Perfeito — recebemos sua mensagem. Vamos responder em breve.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-7">
        <Reveal>
          <h3 className="font-serif text-2xl tracking-tight text-[var(--ragi-cream)]">
            Vamos encontrar o seu café ideal
          </h3>
        </Reveal>
        <Reveal delayMs={110}>
          <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
            Conte seu método de preparo (V60, prensa, espresso) e o perfil que você gosta. A gente recomenda um
            café e a moagem ideal.
          </p>
        </Reveal>

        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
                Nome
              </span>
              <input
                name="name"
                autoComplete="name"
                className="h-11 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-[var(--ragi-cream)] outline-none transition focus:border-[var(--ragi-gold)]/70"
                placeholder="Seu nome"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
                E-mail
              </span>
              <input
                name="email"
                autoComplete="email"
                inputMode="email"
                className="h-11 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-[var(--ragi-cream)] outline-none transition focus:border-[var(--ragi-gold)]/70"
                placeholder="voce@exemplo.com"
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
              WhatsApp (opcional)
            </span>
            <input
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              className="h-11 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-[var(--ragi-cream)] outline-none transition focus:border-[var(--ragi-gold)]/70"
              placeholder="(35) 9 8887-7102"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
              Mensagem
            </span>
            <textarea
              name="notes"
              rows={4}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[var(--ragi-cream)] outline-none transition focus:border-[var(--ragi-gold)]/70"
              placeholder="Ex.: Gosto de café doce, faço V60, quero algo para o dia a dia…"
            />
          </label>

          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold",
                "bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] text-black",
                "transition hover:brightness-[1.05] disabled:opacity-70",
              )}
              disabled={status === "sending"}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === "sending" ? "Enviando…" : "Enviar"}
            </button>

            <p
              className={cn(
                "text-sm",
                status === "sent"
                  ? "text-[color:color-mix(in_oklab,var(--ragi-gold)_70%,white)]"
                  : status === "error"
                    ? "text-red-300"
                    : "text-[color:color-mix(in_oklab,var(--ragi-cream)_68%,transparent)]",
              )}
              aria-live="polite"
            >
              {message}
            </p>
          </div>
        </form>
      </div>

      <div className="grid gap-3">
        <Reveal delayMs={100}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--ragi-cream)]">E-mail</p>
            </div>
            <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              contato@cofferagi.com
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={170}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[var(--ragi-cream)]">WhatsApp</p>
            </div>
            <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              (35) 9 8887-7102
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,246,234,0.08),rgba(214,179,106,0.12))] p-6 backdrop-blur-xl">
            <p className="font-serif text-xl tracking-tight text-[var(--ragi-cream)]">
              “Café bom é o que você consegue repetir.”
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
              A gente te ajuda a acertar o preparo e escolher um perfil que combina com seu paladar.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

