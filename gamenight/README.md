# 🎲 GameNight — Prototype

> « On joue à quoi ce soir ? »

Mini-site interactif présentant **GameNight**, une application (fictive, prototype)
de recommandation de jeux de société qui apprend les goûts des joueurs — un peu
comme Spotify ou Letterboxd, mais pour vos soirées jeux.

Ce dépôt est un **prototype front-end autonome, sans backend et sans
authentification réelle**. Toutes les données (jeux, profils, amis) sont
fictives et codées en dur pour la démonstration.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrez l'URL affichée (par défaut http://localhost:5173).

Pour un build de production :

```bash
npm run build
npm run preview
```

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (thème custom : typographies, couleurs, animations dans `src/index.css`)
- **Framer Motion** pour les micro-animations et les transitions

## Ce qui est réellement fonctionnel

- Sélection joueurs / durée / ambiance dans la section « On joue à quoi ? »
- Moteur de recommandation basé sur des règles (`src/data/games.js`,
  fonction `recommend`) qui recalcule le match en fonction des choix
- Alternatives et explication générées dynamiquement
- Modale « Scanner ma ludothèque » (ouverture/fermeture, Échap, clic
  extérieur, mini séquence d'analyse simulée)
- Navigation avec ancre + menu mobile (hamburger)
- Animations au survol, au scroll (`whileInView`) et micro-interactions

## Structure

```
src/
  data/games.js        # données fictives + logique de recommandation
  components/           # une section = un composant
  App.jsx                # assemblage de la page
```
