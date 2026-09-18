# Gold Butterfly Animation (drop-in replacement)

Ornate gold/amber SVG butterflies with a fluttering-wing + meandering
flight-path animation, styled to match your reference image
(gold gradient wings, fine line-art detail, eyespot, sparkle stars).

## Files

```
butterflies/
  GoldButterfly.jsx      – one ornate SVG butterfly (wings flap via CSS)
  GoldSparkle.jsx        – small twinkling 4-point star accent
  FlyingButterflies.jsx  – scatters several butterflies + stars, each
                            flying its own meandering path
  GoldButterfly.css      – all animation keyframes (flutter + flight + twinkle)
PhotoPreviewExample.jsx  – example showing how to wire it into a
                            photo-preview / lightbox modal
```

## 1. Copy the files in

Copy the whole `butterflies/` folder into `src/components/` in your
project (so you end up with `src/components/butterflies/...`).

## 2. Find your current butterfly code and remove it

Open whatever component renders your photo preview / lightbox and
look for the butterfly SVG or animation you added previously —
delete that markup (and its CSS/keyframes if they're not used
anywhere else).

## 3. Drop in the replacement

```jsx
import FlyingButterflies from './components/butterflies/FlyingButterflies'

// ... inside your preview/lightbox JSX, in the SAME spot the old
// butterfly code used to be:
<div className="relative">
  <img src={photo} alt="" />
  <FlyingButterflies count={4} starCount={6} />
</div>
```

**Important:** the parent wrapping `<div>` must have `position: relative`
(Tailwind's `relative` class, or `position: relative` in plain CSS).
`FlyingButterflies` fills it with an absolutely-positioned,
click-through layer (`pointer-events: none`), so it floats on top of
your photo without blocking clicks, zoom controls, close buttons, etc.

See `PhotoPreviewExample.jsx` for a full worked example of a modal
with this wired in.

## Customizing

- `count` — how many butterflies (default 5)
- `starCount` — how many twinkling sparkles (default 8)
- Size range, colors, and flight paths are all editable in
  `GoldButterfly.jsx` (gradient stops) and `GoldButterfly.css`
  (the `gb-path-1/2/3` keyframes — add more variants for extra variety,
  or tweak the `translate()`/`rotate()` values to change how far/fast
  they roam).
- Wing flap speed: the `gb-flap` animation duration in `GoldButterfly.css`
  (currently `0.5s`).

No extra npm packages needed — it's plain SVG + CSS, so it drops into
any React project (Vite, Next.js, Create React App, etc.) as-is.
