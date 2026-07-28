import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'

const App = () => {
  return (
    <div className=' relative w-screen min-h-screen overflow-x-auto overflow-visible'>
      <Navbar/>
      <Hero/>
      <ServiceSummary/>
      <Services/>
    </div>
  )
}

export default App
