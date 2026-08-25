import { useRef } from 'react'
import Marquee from '../components/Marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const items = [
  'Innovation',
  'Precision',
  'Trust',
  'Collaboration',
  'Excellence',
]

const items2 = [
  'Contact US',
  'Contact US',
  'Contact US',
  'Contact US',
  'Contact US',
]

const ContactsSummary = () => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const content = contentRef.current

      if (!container || !content) return

      const mm = gsap.matchMedia()

      // Desktop: Pinned zoom effect
      mm.add('(min-width: 1024px)', () => {
        gsap.fromTo(
          content,
          {
            scale: 0.35,
            autoAlpha: 0.1,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'center center',
              end: '+=800 center',
              scrub: 2,
              pin: true,
              pinSpacing: true,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // Mobile / Tablet: Lightweight, unpinned scrub to protect main thread
      mm.add('(max-width: 1023px)', () => {
        gsap.fromTo(
          content,
          {
            scale: 0.75,
            autoAlpha: 0.3,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'center 40%',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="mt-16 flex min-h-screen flex-col items-center justify-between gap-12 overflow-hidden"
    >
      {/* Top Marquee */}
      <Marquee items={items} />

      {/* Central Statement */}
      <div
        ref={contentRef}
        className="overflow-hidden text-center font-light contact-text-responsive will-change-transform"
      >
        <p>
          "Let's build a <br />
          <span className="font-normal">memorable</span> &{' '}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> "
        </p>
      </div>

      {/* Bottom Marquee */}
      <Marquee
        items={items2}
        reverse={true}
        className="border-y-2 bg-transparent text-black"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  )
}

export default ContactsSummary