# Arcot Manimark — Home Page

React + Vite + Tailwind CSS v4 build of the `MM-WEB-HOME-P01.psd` home page design.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`, theme tokens in `src/index.css`)
- Fonts: **Fredoka** (headings) + **Nunito Sans** (body), loaded via Google Fonts

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    TopBar.jsx      Location-access notice bar
    Header.jsx      Logo, nav (active state), search/account/cart, mobile menu
    Hero.jsx         "South India's No.1 Peanut Burfi" banner
    PromoGrid.jsx    New Arrivals / Find Outlet / Shop Now / Review cards
    Footer.jsx       Company info, link columns, E-Broch & WhatsApp cards
    StarIcon.jsx     Shared star SVG
  assets/images/     PNG assets exported from the PSD (see below)
  App.jsx
  index.css          Tailwind import + brand theme tokens (@theme)
```

## Design tokens (sampled directly from the PSD)

| Token               | Hex       |
| ------------------- | --------- |
| brand-magenta       | `#E23AA6` |
| brand-magenta-dark  | `#C41687` |
| brand-yellow        | `#FFD705` |
| brand-yellow-light  | `#F6EA48` |
| brand-teal          | `#3DC3CF` |
| brand-teal-light    | `#B0E2E8` |
| brand-pink-card     | `#FE7FC3` |
| brand-review-yellow | `#FFDB1E` |
| brand-orange        | `#F0720C` |
| brand-pink-soft     | `#FCEBF6` |
