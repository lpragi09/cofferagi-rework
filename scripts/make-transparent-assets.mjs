import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/**
 * Gera PNGs com fundo transparente a partir de imagens com fundo branco.
 *
 * Heurística:
 * - pixels "quase brancos" (>= 248) viram alpha 0
 * - demais ficam com alpha 255
 *
 * Ajuste o limiar se necessário.
 */

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");

async function makeTransparentPng({ inputName, outputName, threshold = 248 }) {
  const inputPath = path.join(PUBLIC_DIR, inputName);
  const outputPath = path.join(PUBLIC_DIR, outputName);

  const input = await fs.readFile(inputPath);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data); // cópia mutável
  const channels = info.channels; // deve ser 4 com ensureAlpha
  const width = info.width;
  const height = info.height;

  for (let i = 0; i < out.length; i += channels) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const isNearWhite = r >= threshold && g >= threshold && b >= threshold;
    out[i + 3] = isNearWhite ? 0 : 255;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  return { inputPath, outputPath };
}

async function main() {
  const jobs = [
    makeTransparentPng({ inputName: "logo.jpeg", outputName: "logo.png", threshold: 248 }),
    makeTransparentPng({ inputName: "coffee-pack.jpeg", outputName: "coffee-pack.png", threshold: 250 }),
  ];

  const results = await Promise.all(jobs);
  console.log("OK — PNGs gerados:", results.map((r) => path.relative(ROOT, r.outputPath)));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

