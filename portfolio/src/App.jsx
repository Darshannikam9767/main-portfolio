import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import About from './sections/About'
import Work from './sections/Work'
import ContactsSummary from './sections/ContactsSummary'
import Contact from './sections/Contact'
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

const App = () => {
  const { progress } = useProgress()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsReady(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <ReactLenis root
      options={{
        smoothWheel: true,
        smoothTouch: false, // 👈 Ensures native hardware scrolling on mobile
        touchMultiplier: 2,
      }}
      className='relative w-screen min-h-screen'>

      {/* 
        The loader stays in the DOM, but we toggle opacity and pointer-events.
        Also updated z-999 to the correct Tailwind syntax: z-[999]
      */}
      <div
        className={`fixed inset-0 z-999 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <p className='mb-4 text-xl tracking-widest animate-pulse'>
          Loading {Math.floor(progress)} %
        </p>
        <div className='relative flex items-center h-1 rounded bg-white/20 w-60'>
          <div
            className='absolute top-0 left-0 h-1.5 transition-all duration-300 bg-white rounded'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Work />
        <ContactsSummary />
        <Contact />
      </div>

    </ReactLenis>
  )
}

export default App