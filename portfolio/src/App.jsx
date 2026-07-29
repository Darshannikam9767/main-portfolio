import { ReactLenis } from 'lenis/react'  
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import About from './sections/About'

const App = () => {
  return (
    <ReactLenis 
    root 
    className=' relative w-screen min-h-screen '>
      <Navbar/>
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <About/>
      <section className='h-screen'></section>
    </ReactLenis>
  )
}

export default App
