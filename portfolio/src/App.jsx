import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=' relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <section id='home' className='h-screen bg-red-300'>Home</section>
      <section id='services' className='h-screen bg-green-400'>Services</section>
      <section id='about' className='h-screen bg-orange-400'>About</section>
      <section id='work' className='h-screen bg-gray-600'>Work</section>
      <section id='contact'className='h-screen bg-purple-400'>Contact</section>
    </div>
  )
}

export default App
