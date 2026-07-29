import React from 'react'
import AnimatedHeaderText from '../components/AnimatedHeaderText'

const Services = () => {
  const text = `I build secure, high-performance
  full-stack apps with smoothUX to
   drive growth not headaches.`
  return (
    <section id='services' className='min-h-screen bg-black rounded-t-4xl'>
        <AnimatedHeaderText subTitle={"Behind the scene, Beyond the screen"} title={"Service"} text={text} textColor={"text-white"} withScrollTrigger={true} />
    </section>
  )
}

export default Services
