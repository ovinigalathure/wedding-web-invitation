import React from 'react'

/** Small 4-pointed gold sparkle, used as scattered accents. */
export default function GoldSparkle({ size = 14, style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`gb-star ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0 C12 6.5 13 9.5 14.5 11 C16 12.5 18 13.5 24 13.5 C18 13.5 16 14.5 14.5 16 C13 17.5 12 20.5 12 27 C12 20.5 11 17.5 9.5 16 C8 14.5 6 13.5 0 13.5 C6 13.5 8 12.5 9.5 11 C11 9.5 12 6.5 12 0 Z"
        fill="currentColor"
        transform="translate(0,-1.5) scale(0.9)"
      />
    </svg>
  )
}
