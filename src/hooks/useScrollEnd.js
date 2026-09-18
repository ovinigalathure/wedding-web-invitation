// src/hooks/useScrollEnd.js
import { useEffect, useRef, useState } from 'react'

/**
 * Fires exactly once, the first time the user scrolls within
 * `thresholdPx` of the bottom of the document.
 */
export function useScrollEnd(thresholdPx = 80) {
  const [reachedEnd, setReachedEnd] = useState(false)
  const hasFired = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasFired.current) return
      // ignore the pre-loader moment: only count a real user scroll
      if (window.scrollY <= 0) return
      const scrolled = window.innerHeight + window.scrollY
      const fullHeight = document.documentElement.scrollHeight
      if (scrolled >= fullHeight - thresholdPx) {
        hasFired.current = true
        setReachedEnd(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [thresholdPx])

  return reachedEnd
}