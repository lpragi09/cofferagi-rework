import { createClient } from "@supabase/supabase-js";

/**
 * Client do Supabase (placeholder).
 *
 * Importante:
 * - Use RLS no Supabase e NUNCA confie em validação apenas no frontend.
 * - Variáveis devem vir de `.env.local`.
 */
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Nota: Em produção, isso deve estar sempre definido.
    // Mantemos o erro para evitar falhas silenciosas durante a integração.
    throw new Error(
      "Supabase não configurado. Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY em .env.local",
    );
  }

  return createClient(url, anonKey);
}

