# Blue Atelier — Handmade Art Store

A responsive premium art storefront concept built with React, JSX, Vite, and plain CSS.

## Features
- Responsive navigation with mobile menu and product search
- Product catalog with category filtering, favorites, and cart
- Quantity controls and subtotal calculation
- Contact form validation with demo-only feedback
- Newsletter form validation with demo-only feedback
- Accessible labels, keyboard focus, reduced-motion support

## Stack
React 19 · JavaScript · JSX · Vite · CSS

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deployment
GitHub Pages deployment is configured through `.github/workflows/deploy.yml`. The workflow builds the Vite app and publishes `dist`. The Vite `base` is set to `/handmade-art-store/` during GitHub Actions builds.


Contact, newsletter, and checkout interactions are demo-only and do not send data or process payments.
