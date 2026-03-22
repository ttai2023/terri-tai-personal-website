# Terri Tai — Creative Portfolio

Space · artsy · classical. Built with React + Vite + TypeScript.

## Sections
- **Hero** — Monogram orb, orbit rings, mystical title
- **Magic** — Stage-framed video embeds
- **Paintings** — Gallery grid with hover overlays
- **Music** — Animated waveform + tracklist
- **Poetry** — Sidebar selector + poem reader
- **About** — Duality narrative + links

## Setup
```bash
npm install
npm run dev      # localhost dev
npm run build    # production build → /dist
```

## Quick Customization

**Magic videos** — in `MagicSection.tsx`, replace `url:` values with your YouTube embed URLs.

**Paintings** — in `PaintingsSection.tsx`, put images in `public/paintings/` and swap the placeholder div for `<img src="/paintings/your-file.jpg" />`.

**Music** — update the `tracks` array in `MusicSection.tsx` and replace the embed placeholder with your Spotify/SoundCloud iframe.

**Poetry** — edit the `poems` array in `PoetrySection.tsx`.

**Links** — search for `ttai2023` to find and update all social/portfolio links.

## Fonts (Google Fonts, no install needed)
- **Cinzel** — nav, labels, section markers
- **Cormorant Garamond** — display headings
- **EB Garamond** — body, poetry, prose
- **JetBrains Mono** — code accents, durations

## Color Variables (in `index.css`)
```css
--void: #04030a          /* page background */
--gold: #c9a96e          /* primary accent */
--silver: #b8c5d6        /* body text */
--cream: #f5f0e8         /* headings */
--gold-dim: #7a6240      /* muted gold */
--silver-dim: #6b7d95    /* muted text */
```

## Deploy to GitHub Pages
In `vite.config.ts`, add:
```ts
base: '/your-repo-name/'
```
Then `npm run build` and push `/dist` to the `gh-pages` branch.
