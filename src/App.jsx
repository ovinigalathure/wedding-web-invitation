import React, { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import FinalCTAModal from './components/FinalCTAModal'
import MusicToggle from './components/MusicToggle'
import { useScrollEnd } from './hooks/useScrollEnd'

export default function App() {
  const [entered, setEntered] = useState(false)
  const reachedEnd = useScrollEnd(80)
  const [showFinalCTA, setShowFinalCTA] = useState(false)

  useEffect(() => {
    if (!reachedEnd) return
    const timer = setTimeout(() => setShowFinalCTA(true), 450)
    return () => clearTimeout(timer)
  }, [reachedEnd])

  const scrollToRSVP = () => {
    setShowFinalCTA(false)
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="top" className="relative">
      {!entered && <Preloader onEnter={() => setEntered(true)} />}

      {entered && (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <OurStory />
          <Countdown />
          <EventDetails />
          <Gallery />
          <RSVP />
          <Footer />
        </div>
      )}

      <FinalCTAModal
        open={showFinalCTA}
        onClose={() => setShowFinalCTA(false)}
        onRSVP={scrollToRSVP}
      />
      <MusicToggle entered={entered} />
    </div>
  )
}
