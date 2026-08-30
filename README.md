# Sunita Rout — Product Design Portfolio

A cinematic, House of the Dragon–inspired product-design portfolio presenting selected work through problems, design decisions, systems thinking, and measurable outcomes.

## Included

- Responsive portfolio homepage
- U-Discover case study
- Redington Online case study
- Automation Systems case study
- Custom editorial artwork and interactive motion
- Reduced-motion and mobile fallbacks

## Run locally

### Requirements

- Node.js 22.13 or newer
- npm

### Setup

```bash
git clone https://github.com/sunita2295/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open the local URL printed in the terminal, normally `http://localhost:3000`.

No environment variables or sign-in are required to review the portfolio.

## Production review

```bash
npm run build
npm run start
```

## Useful commands

```bash
npm run dev     # Start the local development server
npm run build   # Create and validate a production build
npm run start   # Serve the production build
npm test        # Build and run the rendered HTML test
npm run lint    # Run ESLint
```

## Project structure

- `app/portfolio.tsx` — homepage content and interactions
- `app/globals.css` — visual system, responsive layout, and motion
- `app/work/` — case-study pages and shared case-study components
- `public/` — portfolio artwork and image assets

## Live portfolio

[sunita-rout-portfolio.daisyrout2295.chatgpt.site](https://sunita-rout-portfolio.daisyrout2295.chatgpt.site/)
