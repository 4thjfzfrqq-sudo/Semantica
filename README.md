#!/usr/bin/env node
// Génère les données initiales pour Sémantica
// Usage: ANTHROPIC_API_KEY=sk-ant-... node scripts/seed.mjs

import fs from "fs";

const SEED_WORDS = [
  "cascade", "nostalgie", "volcan", "symphonie", "algorithme",
  "brume", "mélancolie", "glacier", "fresque", "nébuleuse",
  "prairie", "euphorie", "falaise", "métaphore", "molécule",
  "crépuscule", "empathie", "labyrinthe", "improvisation", "entropie",
  "rosée", "sérénité", "récif", "calligraphie", "chromosome",
  "torrent", "angoisse", "dune", "sonnet", "fractale",
  "horizon", "gratitude", "savane", "aquarelle", "neurone",
  "silence", "résilience", "grotte", "opéra", "quasar",
  "aube", "solitude", "avalanche", "rhapsodie", "isotope",
  "vertige", "paradoxe", "marécage", "épopée", "prisme",
];

const PROMPT = (word) => `Pour le jeu de devinette sémantique Sémantica, génère 500 associations pour le mot français "${word}".

Critères qualité :
1. Synonymes directs et quasi-synonymes (score 850-950)
2. Mots du même champ sémantique précis (score 600-850)  
3. Mots évoqués par le contexte habituel du mot (score 350-600)
4. Associations thématiques plus larges (score 150-350)
5. Liens distants mais réels (score 10-150)

Important :
- Privilégie la pertinence HUMAINE sur la proximité statistique
- Inclus verbes, adjectifs, noms communs
- Évite les mots trop génériques
- Couvre des angles inattendus mais justes

Réponds UNIQUEMENT avec ce JSON (sans markdown) :
{"associations": [{"mot": "xxx", "score": 000}, ...]}`;

async function generate(word) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-opus-4-5",
      max_tokens: 8000,
      messages: [{ role: "user", content: PROMPT(word) }],
    }),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const d = await r.json();
  const text = d.content?.find(b => b.type === "text")?.text || "";
  return JSON.parse(text.replace(/```json|```/g, "").trim());
}

async function main() {
  const out = {};
  const file = "data/words.json";
  if (fs.existsSync(file)) Object.assign(out, JSON.parse(fs.readFileSync(file)));

  for (let i = 0; i < SEED_WORDS.length; i++) {
    const w = SEED_WORDS[i];
    if (out[w]) { console.log(`skip ${w}`); continue; }
    try {
      console.log(`[${i+1}/${SEED_WORDS.length}] ${w}...`);
      const { associations } = await generate(w);
      out[w] = associations
        .sort((a, b) => b.score - a.score)
        .reduce((acc, { mot, score }) => ({ ...acc, [mot.toLowerCase()]: score }), {});
      fs.writeFileSync(file, JSON.stringify(out));
      console.log(`  ✓ ${Object.keys(out[w]).length} mots`);
      await new Promise(r => setTimeout(r, 800));
    } catch(e) {
      console.error(`  ✗ ${e.message}`);
    }
  }
  fs.writeFileSync("data/wordlist.json", JSON.stringify(Object.keys(out)));
  console.log("Done!");
}
main();
