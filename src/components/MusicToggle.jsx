import React, { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import './MusicToggle.css'
import bgMusic from '../Assests/tunetank-romantic-wedding-love-music-412708.mp3'

const STORAGE_KEY = 'wedding-music-pref'

export default function MusicToggle({ entered }) {
  const audioRef = useRef(null)
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'off'
    } catch {
      return true
    }
  })
  const [playing, setPlaying] = useState(false)
  const [blocked, setBlocked] = useState(false)

  const tryStart = () => {
    const audio = audioRef.current
    if (!audio || !enabled) return
    audio.volume = 0.3
    audio.play().then(
      () => setBlocked(false),
      () => setBlocked(true)
    )
  }

  // attempt autoplay immediately on load; works on repeat visits and in
  // browsers that permit it for this site
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    tryStart()
    const onCanPlay = () => tryStart()
    audio.addEventListener('canplay', onCanPlay)
    return () => audio.removeEventListener('canplay', onCanPlay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // the moment the falling heart opens the invitation and the site is
  // entered, start the music
  useEffect(() => {
    if (entered) tryStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered])

  // browsers block audible autoplay until the first user gesture, so as a
  // small unlock the audio starts on the first click/tap/keypress anywhere
  useEffect(() => {
    if (!blocked || !enabled) return
    const unlock = () => {
      const audio = audioRef.current
      if (!audio) return
      audio.play().then(
        () => setBlocked(false),
        () => {}
      )
    }
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)
    window.addEventListener('touchend', unlock)
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      window.removeEventListener('touchend', unlock)
    }
  }, [blocked, enabled])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off')
    } catch {
      /* ignore */
    }
    if (!enabled) {
      audioRef.current?.pause()
    } else {
      tryStart()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play().then(
        () => setBlocked(false),
        () => setBlocked(true)
      )
    }
  }

  const pending = blocked && enabled

  return (
    <>
      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        preload="auto"
        onPlay={() => {
          setPlaying(true)
          setBlocked(false)
        }}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={playing ? 'Pause music' : 'Play music'}
        className={`music-toggle ${playing ? 'is-playing' : ''} ${pending ? 'is-pending' : ''}`}
      >
        {playing ? <Music size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  )
}