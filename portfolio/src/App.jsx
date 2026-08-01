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
  
  const [isReady, seIsReady] = useState(false)


  useEffect(() => {
    if (progress === 100) {
      seIsReady(true)
    }
  }, [progress])
  return (
    <ReactLenis
      root
      className=' relative w-screen min-h-screen '>

      {!isReady && (
        <div className='fixed inset-0 z-999  flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light'>
          <p className='mb-4 text-xl tracking-widest animate-pulse'>
            Loading {Math.floor(progress)} %
          </p>
            <div className='h-1 rounded bg-white/20 w-60  relative flex items-center'>
              <div className='h-1.5 absolute  top-0 left-0 transition-all duration-1000 bg-white rounded' 
              style={{
                width:`${progress}%`
              }} />
            </div>
        </div>
      )}

      <div className={`${isReady ? 'opacity-100':'opacity-0 transition-opacity duration-1000'}`}>
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
