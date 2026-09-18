import React from 'react'

/** Small gold flourish used under section titles */
export function Flourish({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={`mx-auto h-6 w-40 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20 C40 20 40 5 70 5 C90 5 90 20 100 20 C110 20 110 5 130 5 C160 5 160 20 200 20"
        stroke="#c9a24a"
        strokeWidth="1.2"
      />
      <circle cx="100" cy="20" r="4" fill="#c9a24a" />
    </svg>
  )
}

/** Corner floral-line ornament for framed cards */
export function CornerOrnament({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 40 C2 18 18 2 40 2" stroke="#c9a24a" strokeWidth="1.2" />
      <path d="M2 55 C2 26 26 2 55 2" stroke="#c9a24a" strokeWidth="0.8" opacity="0.6" />
      <circle cx="2" cy="2" r="3" fill="#c9a24a" />
    </svg>
  )
}

/** Delicate gold ring/heart icon used as a section marker */
export function RingsMark({ className = '' }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="20" r="14" stroke="#c9a24a" strokeWidth="2" />
      <circle cx="38" cy="20" r="14" stroke="#c9a24a" strokeWidth="2" />
    </svg>
  )
}
