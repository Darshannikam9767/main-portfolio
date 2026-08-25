import React, { useEffect, useState } from 'react'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { useProgress } from '@react-three/drei'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import About from './sections/About'
import Work from './sections/Work'
import ContactsSummary from './sections/ContactsSummary'
import Contact from './sections/Contact'

const App = () => {
  const { progress } = useProgress()

  const [isReady, setIsReady] = useState(false)
  const [shouldUnmountLoader, setShouldUnmountLoader] = useState(false)

  useEffect(() => {
    if (progress >= 100) {
      setIsReady(true)
    }
  }, [progress])

  useEffect(() => {
    if (!isReady) return

    const timer = setTimeout(() => {
      setShouldUnmountLoader(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [isReady])

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1.5,
      }}
      className="relative w-screen min-h-screen"
    >
      {!shouldUnmountLoader && (
        <div
          aria-hidden={isReady}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light ${
            isReady
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100'
          }`}
        >
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>

          <div className="relative flex items-center h-1 rounded bg-white/20 w-60">
            <div
              className="absolute top-0 left-0 h-1.5 rounded bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <main className="w-full">
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Work />
        <ContactsSummary />
        <Contact />
      </main>
    </ReactLenis>
  )
}

export default App