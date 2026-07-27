import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className=' relative w-screen min-h-screen overflow-x-auto overflow-visible'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
