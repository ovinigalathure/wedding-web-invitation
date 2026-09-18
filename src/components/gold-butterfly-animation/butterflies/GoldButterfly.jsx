import React from 'react'

/**
 * An ornate gold/amber butterfly, drawn as inline SVG so it can be
 * freely resized, recolored (via CSS variables) and animated.
 *
 * Each wing is split into an upper (top) and lower (bottom) path,
 * plus a `.wing-left` / `.wing-right` wrapper group so CSS can
 * flap them independently — see GoldButterfly.css for the animation.
 */
export default function GoldButterfly({ className = '', style = {}, size = 90 }) {
  return (
    <svg
      viewBox="0 0 240 200"
      width={size}
      height={(size * 200) / 240}
      className={`gold-butterfly ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gb-wing-main" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7e6" />
          <stop offset="40%" stopColor="#f3c366" />
          <stop offset="75%" stopColor="#e08a2b" />
          <stop offset="100%" stopColor="#b5601a" />
        </linearGradient>
        <linearGradient id="gb-wing-soft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="60%" stopColor="#f6cd78" />
          <stop offset="100%" stopColor="#d38a2e" />
        </linearGradient>
      </defs>

      <g transform="translate(120,95)">
        {/* ---------- RIGHT WING GROUP (flaps around body axis) ---------- */}
        <g className="gb-wing gb-wing-right">
          <path
            d="M2,-6 C14,-45 55,-70 82,-58 C108,-47 112,-15 92,4 C74,20 40,18 18,6 C10,2 4,-2 2,-6 Z"
            fill="url(#gb-wing-main)"
            stroke="#8a4f16"
            strokeWidth="0.8"
          />
          <path
            d="M2,6 C10,28 34,52 54,50 C70,48 74,30 62,18 C52,8 30,2 14,4 C8,5 4,6 2,6 Z"
            fill="url(#gb-wing-soft)"
            stroke="#8a4f16"
            strokeWidth="0.8"
          />
          <g stroke="#9a5a1a" strokeWidth="0.6" fill="none" opacity="0.75">
            <path d="M4,-6 C20,-30 45,-45 68,-45" />
            <path d="M4,-6 C22,-22 50,-30 82,-28" />
            <path d="M4,-6 C18,-10 45,-8 78,-2" />
            <path d="M4,-6 C14,4 34,10 58,10" />
          </g>
          <g fill="#9a5a1a" opacity="0.8">
            <circle cx="30" cy="-38" r="1.4" />
            <circle cx="42" cy="-42" r="1.4" />
            <circle cx="55" cy="-42" r="1.4" />
            <circle cx="66" cy="-38" r="1.4" />
            <circle cx="40" cy="-24" r="1.2" />
            <circle cx="55" cy="-26" r="1.2" />
            <circle cx="68" cy="-22" r="1.2" />
            <circle cx="78" cy="-15" r="1.2" />
          </g>
          <circle cx="60" cy="-10" r="7" fill="#fffaf0" opacity="0.9" />
          <circle cx="60" cy="-10" r="4.2" fill="#c9781f" />
          <circle cx="60" cy="-10" r="1.6" fill="#5c3a12" />
          <g stroke="#9a5a1a" strokeWidth="0.5" fill="none" opacity="0.7">
            <path d="M4,8 C16,20 30,32 44,36" />
            <path d="M4,8 C14,14 26,20 38,22" />
          </g>
          <g fill="#9a5a1a" opacity="0.75">
            <circle cx="24" cy="20" r="1" />
            <circle cx="34" cy="28" r="1" />
            <circle cx="44" cy="34" r="1" />
          </g>
        </g>

        {/* ---------- LEFT WING GROUP ----------
            Mirroring and flutter are split into two nested <g>s on
            purpose: a CSS animation on `transform` fully replaces an
            element's SVG `transform` attribute rather than combining
            with it, so the scale(-1,1) mirror has to live on an outer,
            un-animated wrapper. */}
        <g transform="scale(-1,1)">
        <g className="gb-wing gb-wing-left">
          <path
            d="M2,-6 C14,-45 55,-70 82,-58 C108,-47 112,-15 92,4 C74,20 40,18 18,6 C10,2 4,-2 2,-6 Z"
            fill="url(#gb-wing-main)"
            stroke="#8a4f16"
            strokeWidth="0.8"
          />
          <path
            d="M2,6 C10,28 34,52 54,50 C70,48 74,30 62,18 C52,8 30,2 14,4 C8,5 4,6 2,6 Z"
            fill="url(#gb-wing-soft)"
            stroke="#8a4f16"
            strokeWidth="0.8"
          />
          <g stroke="#9a5a1a" strokeWidth="0.6" fill="none" opacity="0.75">
            <path d="M4,-6 C20,-30 45,-45 68,-45" />
            <path d="M4,-6 C22,-22 50,-30 82,-28" />
            <path d="M4,-6 C18,-10 45,-8 78,-2" />
            <path d="M4,-6 C14,4 34,10 58,10" />
          </g>
          <g fill="#9a5a1a" opacity="0.8">
            <circle cx="30" cy="-38" r="1.4" />
            <circle cx="42" cy="-42" r="1.4" />
            <circle cx="55" cy="-42" r="1.4" />
            <circle cx="66" cy="-38" r="1.4" />
            <circle cx="40" cy="-24" r="1.2" />
            <circle cx="55" cy="-26" r="1.2" />
            <circle cx="68" cy="-22" r="1.2" />
            <circle cx="78" cy="-15" r="1.2" />
          </g>
          <circle cx="60" cy="-10" r="7" fill="#fffaf0" opacity="0.9" />
          <circle cx="60" cy="-10" r="4.2" fill="#c9781f" />
          <circle cx="60" cy="-10" r="1.6" fill="#5c3a12" />
          <g stroke="#9a5a1a" strokeWidth="0.5" fill="none" opacity="0.7">
            <path d="M4,8 C16,20 30,32 44,36" />
            <path d="M4,8 C14,14 26,20 38,22" />
          </g>
          <g fill="#9a5a1a" opacity="0.75">
            <circle cx="24" cy="20" r="1" />
            <circle cx="34" cy="28" r="1" />
            <circle cx="44" cy="34" r="1" />
          </g>
        </g>
        </g>

        {/* ---------- BODY (drawn last, on top) ---------- */}
        <ellipse cx="0" cy="0" rx="3" ry="26" fill="#5c3a12" />
        <circle cx="0" cy="-24" r="4" fill="#4a2f0f" />
        <path d="M0,-26 C-6,-36 -14,-40 -18,-38" stroke="#4a2f0f" strokeWidth="1.2" fill="none" />
        <path d="M0,-26 C6,-36 14,-40 18,-38" stroke="#4a2f0f" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  )
}
