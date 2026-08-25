import { useRef } from 'react'
import AnimatedHeaderText from '../components/AnimatedHeaderText'
import AnimatedTextLine from '../components/AnimatedTextLine'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const imgRef = useRef(null)

  const text = `self-directed full-stack developer crafting robust APIs and
responsive interfaces, delivering scalable solutions
from prototype to production.`

  const aboutText = `Full-Stack Developer and BCA graduate (8.46 CGPA). I build complete web applications, pairing robust Python and Java backends with dynamic React interfaces.

When I'm not shipping:

⚡ Experimenting with React and Tailwind to build stunning, user-friendly web interfaces

⚙️ Architecting robust backend systems and REST APIs with Python, Flask, and PostgreSQL

🌌 Animating the web with GSAP and Three.js for that perfect scroll experience

🎓 Deep diving into advanced Data Structures and Object-Oriented Programming`

  useGSAP(
    () => {
      const about = aboutRef.current
      const image = imgRef.current

      if (!about || !image) return

      // About section scale animation
      gsap.to(about, {
        scale: 0.9,
        force3D: true,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: about,
          start: 'bottom 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })

      // Image reveal animation
      gsap.set(image, {
        clipPath:
          'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      })

      gsap.to(image, {
        clipPath:
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 75%',
          once: true,
        },
      })
    },
    {
      scope: aboutRef,
    }
  )

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen rounded-b-4xl bg-black pt-[10vh]"
    >
      <AnimatedHeaderText
        subTitle="Code with purpose, Built to scale"
        title="About"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide text-white/60 md:text-2xl lg:flex-row lg:text-3xl">
        <img
          ref={imgRef}
          src="/images/my_img.webp"
          alt="Darshan Nikam"
          width="600"
          height="902"
          loading="lazy"
          decoding="async"
          className="w-full max-w-xs rounded-3xl object-cover shadow-2xl sm:max-w-md md:max-w-sm lg:max-w-sm"
        />

        <AnimatedTextLine
          text={aboutText}
          className="w-full"
        />
      </div>
    </section>
  )
}

export default About