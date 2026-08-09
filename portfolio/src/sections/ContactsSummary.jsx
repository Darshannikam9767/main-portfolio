import { useRef } from 'react'
import Marquee from '../components/Marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ContactsSummary = () => {
  const containerRef = useRef(null)
  
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ]

  const items2 = [
    "Contact US",
    "Contact US",
    "Contact US",
    "Contact US",
    "Contact US",
  ]

  useGSAP(() => {
    
    gsap.fromTo(
      '.contact-content',
      { 
        scale: 0.35, 
        opacity: 0.1 
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: '+=800 center', 
          scrub: 4, 
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16 will-change-transform overflow-hidden'
    >
      {/* Top Marquee */}
      <Marquee items={items} />

      {/* Central Statement wrapper with target class for GSAP */}
      <div className='contact-content overflow-hidden text-center font-light contact-text-responsive'>
        <p>
          "Let's build a <br/>
          <span className='font-normal'>memorable</span> & {" "}
          <span className='italic'>inspiring</span> <br />
          web application <span className='text-gold'>together</span> "
        </p>
      </div>

      {/* Bottom Marquee (Reversed) */}
      <Marquee 
        items={items2}
        reverse={true}
        className='text-black bg-transparent border-y-2' 
        iconClassName='stroke-gold stroke-2 text-primary'
        icon='material-symbols-light:square'
      />
    </section>
  )
}

export default ContactsSummary