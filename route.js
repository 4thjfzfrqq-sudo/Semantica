# 🎮 Sémantica

Jeu de devinette sémantique — 500 associations par mot, vraiment pertinentes.

## Architecture

- **Zéro coût à l'usage** — les associations sont pré-calculées en JSON statique
- **Next.js** sur Vercel — hébergement gratuit
- **Pas d'API externe** pendant le jeu

## Déploiement Vercel (5 min)

1. Crée un compte sur **vercel.com** (gratuit)
2. Va sur **vercel.com/new**
3. Upload ce dossier zippé
4. Clique **Deploy** — c'est tout !

Pas besoin de clé API pour jouer.

## Ajouter plus de mots (optionnel)

Pour générer de nouveaux mots avec Claude :

```bash
ANTHROPIC_API_KEY=sk-ant-... node scripts/seed.mjs
```

Le script génère ~500 associations par mot et les sauvegarde dans `data/words.json`.
Il reprend automatiquement là où il s'est arrêté en cas d'interruption.

## Personnaliser

- **Mots secrets** → `data/wordlist.json` + `data/words.json`
- **Nom du jeu** → `app/layout.js`
- **Couleurs** → `app/page.js` (fonction `getColor`)
