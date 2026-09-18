import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

export default function App() {
  const [entered, setEntered] = useState(false)

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
    </div>
  )
}
