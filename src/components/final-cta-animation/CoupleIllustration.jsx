// src/components/final-cta-animation/CoupleIllustration.jsx
import './CoupleIllustration.css'

export default function CoupleIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={`couple-illustration ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4d47a" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a8792a" />
        </linearGradient>
      </defs>

      {/* soft halo ring behind the couple */}
      <circle
        cx="100" cy="110" r="88"
        fill="none" stroke="url(#goldStroke)" strokeWidth="0.75"
        strokeDasharray="2 6" opacity="0.5" className="halo-ring"
      />

      <g className="couple-float" stroke="url(#goldStroke)" strokeWidth="2"
         fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* groom silhouette */}
        <path d="M78 205 L78 150 Q78 120 90 110 Q94 96 84 86 Q76 78 76 66
                 Q76 52 90 50 Q104 48 106 62 Q108 74 100 82 Q112 92 108 112
                 Q106 128 96 150 L96 205" />
        {/* bride silhouette + gown flare */}
        <path d="M122 205 Q108 180 112 150 Q100 138 102 118 Q96 108 104 96
                 Q98 84 108 76 Q116 68 128 74 Q138 80 134 92 Q142 100 136 112
                 Q146 126 138 148 Q150 178 132 205 Z" />
        {/* bride veil */}
        <path d="M132 88 Q150 96 148 118 Q146 138 130 146" opacity="0.7" />
        {/* joined hands */}
        <path d="M96 150 Q104 156 112 150" strokeWidth="2.4" />
        {/* bouquet */}
        <circle cx="106" cy="158" r="6" fill="url(#goldStroke)" stroke="none" opacity="0.85" />
      </g>
    </svg>
  )
}