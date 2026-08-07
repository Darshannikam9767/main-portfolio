import React from 'react'
import AnimatedHeaderText from '../components/AnimatedHeaderText'
import { socials } from '../constants'
import Marquee from '../components/Marquee'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
  const text = `Got a question, how or project Idea?
  WE'D love to hear from you and discuss further!`
  const items = [
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
  ]

  useGSAP(()=>{
    gsap.from(".social-link",{
      y:100,
      opacity:0,
      delay:0.6,
      duration:1,
      stagger:0.3,
      ease:"back.out",
      scrollTrigger:{
        trigger:".social-link"
      }
    })
  },[])

  return (
    <section id='contact' className=' flex flex-col justify-between min-h-screen bg-black'>
      <div>
        <AnimatedHeaderText
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true} />

        <div className='flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10'>
          <div className='flex flex-col w-full gap-10'>

            <div className='social-link'>
              <h2>E-mail</h2>
              <div className='w-full h-px my-2 bg-white/30' />
              <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>
                DarshanNikam64@gmail.com
              </p>
            </div>

            <div className='social-link'>
              <h2>Phone</h2>
              <div className='w-full h-px my-2 bg-white/30' />
              <p className='text-xl tracking-widest md:text-2xl lg:text-3xl'>
                +91 97670 41200
              </p>
            </div>

            <div className='social-link'>
              <h2>Social Media</h2>
              <div className='w-full h-px my-2 bg-white/30' />
              <div className='flex flex-wrap gap-2'>
                {socials.map((social, index) => (
                  <a key={index} className='text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200' target="_blank" rel="noopener noreferrer" href={social.href}>{`{ ${social.name} }`}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee  items={items} className='text-white bg-transparent' />
    </section>
  )
}

export default Contact
