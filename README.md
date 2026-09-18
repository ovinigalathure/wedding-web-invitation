# Emma & James — Wedding Invitation Website

A modern, responsive gold & ivory digital wedding invitation built with **React**, **Vite**, and **Tailwind CSS** — an elegant scrolling single-page invite with a rising-envelope preloader, live countdown, gold butterfly animated photo lightbox, and an RSVP card.

## ✨ Features

- **Animated envelope "opening" preloader** with a wax-seal monogram — tap **"Open Invitation"** to enter the home page, which also starts the background music
- **Golden Arch hero** — float-animated arch portrait, orbiting halo rings, shimmer-script names, monogram seal, editorial side note
- **Love-letter Our Story** — tilted polaroids held by washi tape, a script "Dear everyone" letter with drop cap, and a beating-heart wax seal
- **Live Countdown** — circular conic-gradient dials that deplete as the hour approaches, shimmer digits that pop on every tick, beating-heart divider
- **Wedding Details** — three floating cards (Date & Time, Location, Poruwa Ceremony) with orbiting icon rings and shimmer top edges; each opens a detailed modal
- **Photo Gallery** — lightbox with prev/next/keyboard controls and **flying gold butterflies + sparkles** that sweep the screen on both sides (pure SVG + CSS, click-through)
- **Modern RSVP** — invitation card beside a form with accept/decline toggles, guest stepper, and a personalized success state
- **End-of-Page RSVP Reminder** — when a visitor scrolls to the very bottom of the site, a golden animated popup appears with a floating line-art couple illustration, drifting hearts and sparkles, and a warm closing message — with a one-tap button that scrolls back up to the RSVP form. Fires once per visit. Fully configurable via `finalReminder` in `src/data/weddingData.js`.
- **Background music** — soft, calm wedding tune that starts as the falling heart auto-opens the invitation into the home page and loops across the whole site; a small gold floating toggle plays or pauses. Preference remembered via `localStorage`, volume kept low. Audio file: `src/Assests/tunetank-romantic-wedding-love-music-412708.mp3`. (Browsers block audible autoplay on a brand-new visit until the first touch, so the very first visit may unlock on the first tap; every later visit starts instantly.)
- **Scrapbook-style footer** with quick links, save-the-date badge, contact, and back-to-top
- Elegant white & gold theme: shimmering gold text + serif/script fonts (Playfair Display, Cormorant Garamond, Alex Brush)
- Scroll-reveal animations (plain IntersectionObserver, no animation library)
- Sticky floating navigation bar
- All content centralized in one config file for easy editing
- Free-license Unsplash stock photos — swap in your own any time

## 🦋 Gold Butterfly Animation

The fluttering butterfly animations used in the gallery preview live in:

```
src/components/gold-butterfly-animation/
```

- `butterflies/GoldButterfly.jsx` + `.css` — ornate gold butterfly (gradient wings, eyespot, wing-flap + full-viewport flight paths)
- `butterflies/GoldSparkle.jsx` — twinkling star accents
- `butterflies/FlyingButterflies.jsx` — swarm overlay (props: `count`, `starCount`, `layout`)

It's wired into the gallery lightbox in `src/components/Gallery.jsx`.

## 🛠 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production-ready static site:

```bash
npm run build
```

The output will be in the `dist/` folder — deploy to Netlify, Vercel, GitHub Pages, or any static host.

## ✏️ How to Customize

Almost everything on the site is controlled from **one file**:

```
src/data/weddingData.js
```

Edit that file to change:

- Bride & groom names, monogram, quote
- Wedding date & day label (the countdown updates automatically) — keep the ISO format in `weddingDateISO`
- Ceremony & reception venue, address, time, maps links
- Poruwa ceremony text and the "lantern of wishes" idea
- RSVP deadline and contact info
- The guest guide is currently unused (section removed) — you can re-add `<GuestGuide />` in `src/App.jsx`
- Photos (swap the Unsplash URLs for your own hosted photos)

## 🖼 Replacing the Photos

The demo uses free-license Unsplash photos as placeholders. To use your own:

1. Add your images to the `public/images/` folder (create it if needed).
2. Update the `images` object in `src/data/weddingData.js`, e.g.:

   ```js
   images: {
     hero: '/images/hero.jpg',
     embrace: '/images/couple.jpg',
     ...
   }
   ```

## 📬 Connecting the RSVP Form

The RSVP form currently only logs submissions to the browser console (front-end demo only — no server included). To actually collect responses, connect it to a service such as:

- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend / serverless function

Just update the `handleSubmit` function in `src/components/RSVP.jsx`.

## 📦 Tech Stack

- React 18
- Vite 7
- Tailwind CSS 3
- lucide-react (icons)

Enjoy, and congratulations! 💍