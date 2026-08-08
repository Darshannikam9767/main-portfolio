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
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "center center",
      end: "+=500 center",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16 will-change-transform'
    >
      {/* Top Marquee */}
      <Marquee items={items} />

      {/* Central Statement */}
      <div className='overflow-hidden text-center font-light contact-text-responsive'>
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