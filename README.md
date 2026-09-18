# Emma & James — Wedding Invitation Website

A modern, responsive, white & gold digital wedding invitation built with **React**, **Vite**, and **Tailwind CSS**. Inspired by the elegant scrolling single-page invitation format (opening envelope, countdown, event details, guest guide, RSVP, gift registry).

## ✨ Features

- Animated envelope "opening" preloader with wax seal
- Elegant white & gold theme with shimmering gold text, serif + script fonts (Playfair Display, Cormorant Garamond, Alex Brush)
- Fully responsive (mobile-first, looks great on phones — just like the reference video — and scales up beautifully on tablet/desktop)
- Sections: Hero, Our Story, Live Countdown, Ceremony & Reception Details, Dress Code, Photo Gallery, Guest Guide (etiquette), RSVP form, Gift Registry, Footer
- Scroll-reveal animations (no external animation library — plain IntersectionObserver)
- Sticky floating navigation bar
- All content centralized in one config file for easy editing
- Stock photography from Unsplash (free license) — swap in your own photos any time

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

The output will be in the `dist/` folder — you can deploy it to Netlify, Vercel, GitHub Pages, or any static host.

## ✏️ How to Customize

Almost everything on the site is controlled from **one file**:

```
src/data/weddingData.js
```

Edit that file to change:
- Bride & groom names, monogram, quote
- Wedding date (the countdown updates automatically)
- Ceremony & reception venue, address, time
- Dress code
- Guest guide / etiquette items
- Gift/bank details
- Contact info
- Photos (swap the Unsplash URLs for your own — just drop your images into `public/` or link to your own hosted photos)

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
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

Enjoy, and congratulations! 💍
