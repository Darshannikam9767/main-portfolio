import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const ServiceSummary = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const sectionRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const title3Ref = useRef(null)
  const title4Ref = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      const title1 = title1Ref.current
      const title2 = title2Ref.current
      const title3 = title3Ref.current
      const title4 = title4Ref.current

      if (!section || !title1 || !title2 || !title3 || !title4) {
        return
      }

      gsap.to(title1, {
        xPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      gsap.to(title2, {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      gsap.to(title3, {
        xPercent: isMobile ? 80 : 30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      gsap.to(title4, {
        xPercent: isMobile ? -80 : -25,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    },
    {
      scope: sectionRef,
      dependencies: [isMobile],
    }
  )

  return (
    <section
      ref={sectionRef}
      className="mt-20 mb-42 overflow-hidden text-center font-light leading-snug contact-text-responsive"
    >
      <div ref={title1Ref}>
        <p className="font-extralight">
          Architecture
        </p>
      </div>

      <div
        ref={title2Ref}
        className="flex translate-x-13 items-center justify-center gap-3"
      >
        <p className="font-semibold">
          Development
        </p>

        <div className="h-1 w-10 rounded-full bg-gold md:w-32" />

        <p className="font-extralight">
          Deployment
        </p>
      </div>

      <div
        ref={title3Ref}
        className="flex -translate-x-40 items-center justify-center gap-3"
      >
        <p>APIs</p>

        <div className="h-1 w-10 rounded-full bg-gold md:w-32" />

        <p className="italic">
          Frontend
        </p>

        <div className="h-1 w-10 rounded-full bg-gold md:w-32" />

        <p>Automation</p>
      </div>

      <div ref={title4Ref}>
        <p>Databases</p>
      </div>
    </section>
  )
}

export default ServiceSummary