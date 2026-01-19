"use client";

import * as React from "react";
import { Coffee, Flame, Leaf, Star, X, MapPin, Droplets, Award } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/landing/Reveal";
import { getWhatsAppHref } from "@/lib/whatsapp";

type CoffeeCategory = "Todos" | "Sul de Minas" | "Microlotes" | "Fermentados" | "Descafeinado";

type CoffeeProduct = {
  id: string;
  name: string;
  category: Exclude<CoffeeCategory, "Todos">;
  notes: string;
  roast: "Clara" | "Média" | "Média-escura";
  intensity: 1 | 2 | 3 | 4 | 5;
  priceFrom: number;
  badges: string[];
  origin: string;
  process: string;
  variety: string;
  altitude: string;
  score: string;
  recommended: string[];
  description: string;
};

const CATEGORIES: CoffeeCategory[] = ["Todos", "Sul de Minas", "Microlotes", "Fermentados", "Descafeinado"];

const PRODUCTS: CoffeeProduct[] = [
  {
    id: "tres-pontas-doce",
    name: "Três Pontas Doce",
    category: "Sul de Minas",
    notes: "Chocolate, caramelo e final de castanhas",
    roast: "Média",
    intensity: 3,
    priceFrom: 44.9,
    badges: ["Produção própria", "Doçura alta", "Versátil"],
    origin: "Três Pontas - MG (Sul de Minas)",
    process: "Natural",
    variety: "Catuaí / Mundo Novo",
    altitude: "980–1.120m",
    score: "84+",
    recommended: ["V60", "Coado", "Prensa", "Espresso (médio)"],
    description:
      "Um café especial para o dia a dia, com doçura evidente e corpo macio. Fácil de acertar e excelente para repetir.",
  },
  {
    id: "sul-de-minas-citric",
    name: "Sul de Minas Cítrico",
    category: "Sul de Minas",
    notes: "Frutas amarelas, mel e final cítrico limpo",
    roast: "Média",
    intensity: 3,
    priceFrom: 49.9,
    badges: ["Xícara limpa", "Aromático", "Café especial"],
    origin: "Três Pontas - MG (Sul de Minas)",
    process: "Cereja descascado",
    variety: "Bourbon Amarelo",
    altitude: "1.050m",
    score: "85+",
    recommended: ["V60", "Aeropress", "Coado"],
    description:
      "Acidez delicada e doçura alta, com finalização limpa. Ideal para quem busca uma xícara mais viva e perfumada.",
  },
  {
    id: "microlote-bourbon",
    name: "Microlote Bourbon",
    category: "Microlotes",
    notes: "Pêssego, melado e flor de laranjeira",
    roast: "Clara",
    intensity: 2,
    priceFrom: 69.9,
    badges: ["Lote pequeno", "Perfil sensorial", "Raro"],
    origin: "Três Pontas - MG (Sul de Minas)",
    process: "Natural (seleção)",
    variety: "Bourbon",
    altitude: "1.120m",
    score: "86+",
    recommended: ["V60", "Origami", "Aeropress"],
    description:
      "Microlote de destaque, com aroma floral e doçura intensa. Para quem gosta de explorar notas sensoriais claras.",
  },
  {
    id: "microlote-limpo",
    name: "Microlote Limpo",
    category: "Microlotes",
    notes: "Chá preto, bergamota e final doce",
    roast: "Clara",
    intensity: 2,
    priceFrom: 74.9,
    badges: ["Complexo", "Xícara limpa", "Especial"],
    origin: "Três Pontas - MG (Sul de Minas)",
    process: "Lavado",
    variety: "Arara",
    altitude: "1.080m",
    score: "86+",
    recommended: ["V60", "Kalita", "Coado"],
    description:
      "Perfil elegante, com finalização doce e limpa. Ótimo para quem quer complexidade sem perder a delicadeza.",
  },
  {
    id: "fermentado-tropical",
    name: "Fermentado Tropical",
    category: "Fermentados",
    notes: "Abacaxi, frutas tropicais e doçura intensa",
    roast: "Média-escura",
    intensity: 4,
    priceFrom: 79.9,
    badges: ["Experiência sensorial", "Diferentão", "Café especial"],
    origin: "Três Pontas - MG (Sul de Minas)",
    process: "Fermentação controlada",
    variety: "Catuaí",
    altitude: "1.000m",
    score: "86+",
    recommended: ["Aeropress", "V60", "Coado"],
    description:
      "Um perfil moderno e marcante. Doçura alta e notas tropicais para quem quer um café especial fora do óbvio.",
  },
  {
    id: "descafeinado-suave",
    name: "Descafeinado Suave",
    category: "Descafeinado",
    notes: "Chocolate, avelã e final doce",
    roast: "Média",
    intensity: 3,
    priceFrom: 49.9,
    badges: ["Sem cafeína", "Sem perder sabor"],
    origin: "Sul de Minas - MG",
    process: "Descafeinação natural (CO₂)",
    variety: "Blend",
    altitude: "—",
    score: "Especial",
    recommended: ["Coado", "Prensa", "Espresso"],
    description:
      "Para qualquer hora do dia: confortável, doce e sem perder aroma. Ótimo para rotina e para quem evita cafeína.",
  },
];

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CoffeeCatalog() {
  const [active, setActive] = React.useState<CoffeeCategory>("Todos");
  const [selected, setSelected] = React.useState<CoffeeProduct | null>(null);

  const list = React.useMemo(() => {
    if (active === "Todos") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  function buyMessage(p: CoffeeProduct) {
    return `Olá! Quero comprar o ${p.name}. Origem: ${p.origin}. Processo: ${p.process}. Torra ${p.roast}. Notas: ${p.notes}. Pode me passar as opções e valores?`;
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <div className="flex items-center gap-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_75%,transparent)]">
            <Coffee className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
            <span>Cafés especiais, com origem e perfil sensorial claro.</span>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    "border border-white/10",
                    isActive
                      ? "bg-white/10 text-[var(--ragi-cream)]"
                      : "bg-transparent text-[color:color-mix(in_oklab,var(--ragi-cream)_72%,transparent)] hover:bg-white/5 hover:text-[var(--ragi-cream)]",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70",
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, idx) => (
          <Reveal key={p.id} delayMs={80 + idx * 60}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-2xl transition group-hover:opacity-70"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(214,179,106,0.22), transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
                      {p.category} • Torra {p.roast}
                    </p>
                    <h3 className="mt-2 font-serif text-xl tracking-tight text-[var(--ragi-cream)]">
                      {p.name}
                    </h3>
                  </div>
                  <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/5 p-2">
                    {p.roast === "Clara" ? (
                      <Leaf className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                    ) : (
                      <Flame className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
                  {p.notes}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_80%,transparent)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < p.intensity
                              ? "fill-[var(--ragi-gold)] text-[var(--ragi-gold)]"
                              : "text-white/15",
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-[color:color-mix(in_oklab,var(--ragi-cream)_68%,transparent)]">
                      Intensidade
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-medium text-[color:color-mix(in_oklab,var(--ragi-cream)_65%,transparent)]">
                      a partir de
                    </p>
                    <p className="text-base font-extrabold tracking-tight text-[var(--ragi-cream)]">
                      {formatBRL(p.priceFrom)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--ragi-cream)] transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70"
                    onClick={() => setSelected(p)}
                  >
                    Ver detalhes
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] px-4 py-2 text-sm font-extrabold text-black transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--ragi-gold)]/70"
                    // Placeholder: futura integração com Supabase (carrinho/checkout) com RLS
                    onClick={() => {
                      window.open(getWhatsAppHref(buyMessage(p)), "_blank", "noopener,noreferrer");
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <CoffeeDetailsModal
        product={selected}
        onClose={() => setSelected(null)}
        onBuy={(p) => window.open(getWhatsAppHref(buyMessage(p)), "_blank", "noopener,noreferrer")}
      />
    </div>
  );
}

function CoffeeDetailsModal({
  product,
  onClose,
  onBuy,
}: {
  product: CoffeeProduct | null;
  onClose: () => void;
  onBuy: (p: CoffeeProduct) => void;
}) {
  const open = Boolean(product);

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Fechar detalhes"
        onClick={onClose}
      />

      {/* Mobile: bottom-sheet | Desktop: centralizado e mais alto */}
      <div className="absolute inset-0 flex items-end justify-center px-3 pb-3 pt-16 sm:items-center sm:px-6 sm:py-10">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(closest-side, rgba(214,179,106,0.22), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[color:color-mix(in_oklab,var(--ragi-cream)_70%,transparent)]">
                {product.category} • Torra {product.roast} • Intensidade {product.intensity}/5
              </p>
              <h3 className="mt-1 font-serif text-2xl tracking-tight text-[var(--ragi-cream)]">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
                {product.notes}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[var(--ragi-cream)] transition hover:bg-white/10"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative max-h-[78vh] overflow-y-auto px-5 py-5 sm:max-h-[82vh] sm:px-7 sm:py-6">
            <div className="grid gap-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[var(--ragi-cream)]">Origem</p>
                </div>
                <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                  {product.origin}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[var(--ragi-cream)]">Processo</p>
                </div>
                <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                  {product.process}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[var(--ragi-gold)]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[var(--ragi-cream)]">Pontuação</p>
                </div>
                <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_76%,transparent)]">
                  {product.score}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-[var(--ragi-cream)]">Descrição</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_80%,transparent)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-[var(--ragi-cream)]">Recomendado</p>
                <ul className="mt-2 grid gap-2 text-sm text-[color:color-mix(in_oklab,var(--ragi-cream)_78%,transparent)]">
                  {product.recommended.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ragi-gold)]" />
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold text-[color:color-mix(in_oklab,var(--ragi-cream)_68%,transparent)]">
                    a partir de
                  </p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-[var(--ragi-cream)]">
                    {formatBRL(product.priceFrom)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--ragi-cream)] transition hover:bg-white/10"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => onBuy(product)}
                className="rounded-2xl bg-[linear-gradient(135deg,var(--ragi-gold),var(--ragi-gold-2))] px-6 py-3 text-sm font-extrabold text-black transition hover:brightness-[1.05]"
              >
                Comprar no WhatsApp
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

