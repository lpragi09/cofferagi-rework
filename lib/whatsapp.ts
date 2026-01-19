/**
 * Helpers de WhatsApp (frontend).
 *
 * - Número deve estar no formato internacional sem + e sem espaços.
 *   Ex.: 5511999999999
 * - Configure via `.env.local`:
 *   NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
 */

const FALLBACK_NUMBER = "5511999999999";

export function getWhatsAppNumber() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const normalized = (raw ?? "").replace(/[^\d]/g, "");
  return normalized.length >= 10 ? normalized : FALLBACK_NUMBER;
}

export function getWhatsAppHref(message: string) {
  const number = getWhatsAppNumber();
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

