import { useRef } from 'react'
import AnimatedHeaderText from '../components/AnimatedHeaderText'
import { socials } from '../constants'
import Marquee from '../components/Marquee'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const socialRefs = useRef([])

  const text = `Got a question, or a new project Idea?
WE'd love to hear from you and discuss further!`

  const items = [
    'just imagine, I code',
    'just imagine, I code',
    'just imagine, I code',
    'just imagine, I code',
    'just imagine, I code',
  ]

  useGSAP(
    () => {
      const elements = socialRefs.current.filter(Boolean)

      if (!elements.length) return

      gsap.from(elements, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 80%',
          once: true,
        },
      })
    },
    {
      scope: sectionRef,
    }
  )

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex min-h-screen flex-col justify-between bg-black"
    >
      <div>
        <AnimatedHeaderText
          subTitle="You Dream It, I Code it"
          title="Contact"
          text={text}
          textColor="text-white"
          withScrollTrigger={true}
        />

        <div className="mb-10 flex px-10 font-light uppercase leading-none text-white text-[26px] lg:text-[32px]">
          <div className="flex w-full flex-col gap-10">

            {/* Email */}
            <div
              ref={(el) => {
                socialRefs.current[0] = el
              }}
            >
              <h2>E-mail</h2>

              <div className="my-2 h-px w-full bg-white/30" />

              <a
                href="mailto:DarshanNikam64@gmail.com"
                className="text-xl lowercase tracking-wider transition-colors duration-200 hover:text-white/60 md:text-2xl lg:text-3xl"
              >
                DarshanNikam64@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div
              ref={(el) => {
                socialRefs.current[1] = el
              }}
            >
              <h2>Phone</h2>

              <div className="my-2 h-px w-full bg-white/30" />

              <a
                href="tel:+919767041200"
                className="text-xl tracking-widest transition-colors duration-200 hover:text-white/60 md:text-2xl lg:text-3xl"
              >
                +91 97670 41200
              </a>
            </div>

            {/* Social Media */}
            <div
              ref={(el) => {
                socialRefs.current[2] = el
              }}
            >
              <h2>Social Media</h2>

              <div className="my-2 h-px w-full bg-white/30" />

              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase leading-loose tracking-widest transition-colors duration-200 hover:text-white/60 md:text-sm"
                  >
                    {`{ ${social.name} }`}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Marquee
        items={items}
        className="bg-transparent text-white"
      />
    </section>
  )
}

export default Contact