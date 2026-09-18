import React, { useId } from 'react'

export default function Butterfly({
  className = '',
  variant = 'a',
  duration = 18,
  delay = 0,
  size = 6,
}) {
  const gold = useId().replace(/[^a-zA-Z0-9]/g, '')
  const blush = useId().replace(/[^a-zA-Z0-9]/g, '')

  return (
    <div
      aria-hidden="true"
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
      className={`butterfly fly-${variant} ${className}`}
    >
      <svg
        viewBox="0 0 48 36"
        style={{ width: `${size}rem` }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbecc8" />
            <stop offset="55%" stopColor="#e8b96c" />
            <stop offset="100%" stopColor="#c99a4e" />
          </linearGradient>
          <linearGradient id={blush} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6d3cc" />
            <stop offset="100%" stopColor="#e39b90" />
          </linearGradient>
        </defs>

        {/* ── wings ── */}
        <g className="wing-left">
          <path
            d="M24 15 C16 3 5 5 4 16 C3 26 14 31 22 23 C23 21 24 18 24 15 Z"
            fill={`url(#${gold})`}
            stroke="#c99a4e"
            strokeWidth="0.6"
          />
          <path
            d="M24 23 C20 29 13 32 14 35 C15 38 23 35 24 26 Z"
            fill={`url(#${blush})`}
            stroke="#d98a7f"
            strokeWidth="0.6"
          />
          <circle cx="14" cy="15" r="2" fill="#fffdf8" opacity="0.8" />
          <circle cx="20" cy="20" r="1.1" fill="#fffdf8" opacity="0.6" />
        </g>

        <g className="wing-right">
          <path
            d="M24 15 C32 3 43 5 44 16 C45 26 34 31 26 23 C25 21 24 18 24 15 Z"
            fill={`url(#${gold})`}
            stroke="#c99a4e"
            strokeWidth="0.6"
          />
          <path
            d="M24 23 C28 29 35 32 34 35 C33 38 25 35 24 26 Z"
            fill={`url(#${blush})`}
            stroke="#d98a7f"
            strokeWidth="0.6"
          />
          <circle cx="34" cy="15" r="2" fill="#fffdf8" opacity="0.8" />
          <circle cx="28" cy="20" r="1.1" fill="#fffdf8" opacity="0.6" />
        </g>

        {/* ── body ── */}
        <ellipse cx="24" cy="20" rx="2.6" ry="8.5" fill="#7a4e2d" />
        <ellipse cx="24" cy="24" rx="1.6" ry="4" fill="#a97144" opacity="0.55" />

        {/* ── antennae ── */}
        <path
          d="M23.4 12 C22 7.5 19.5 5.5 19 4 M24.6 12 C26 7.5 28.5 5.5 29 4"
          stroke="#7a4e2d"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="19" cy="4" r="1.4" fill="#e8b96c" />
        <circle cx="29" cy="4" r="1.4" fill="#e8b96c" />

        {/* ── cute face ── */}
        <circle cx="22.2" cy="16" r="1.15" fill="#2b2622" />
        <circle cx="25.8" cy="16" r="1.15" fill="#2b2622" />
        <circle cx="22.6" cy="15.6" r="0.4" fill="#fffdf8" />
        <circle cx="26.2" cy="15.6" r="0.4" fill="#fffdf8" />
        <circle cx="21.6" cy="17.6" r="0.9" fill="#e38986" opacity="0.7" />
        <circle cx="26.4" cy="17.6" r="0.9" fill="#e38986" opacity="0.7" />
        <path
          d="M23 18.4 Q24 19.5 25 18.4"
          stroke="#2b2622"
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}