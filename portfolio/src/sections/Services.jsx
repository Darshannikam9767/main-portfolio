import { useRef } from 'react'
import AnimatedHeaderText from '../components/AnimatedHeaderText'
import { servicesData } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)

  const text = `I build secure, well-structured full-stack\n apps with clean code and smooth ux—no\n shortcuts, no headaches.`

  useGSAP(
    () => {
      const section = sectionRef.current

      if (!section) return

      // Section scale animation
      gsap.from(section, {
        scale: 0.9,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      // Service cards entrance
      const cards = section.querySelectorAll('.service-card')

      if (!cards.length) return

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        force3D: true,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
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
      id="services"
      className="isolate min-h-screen rounded-t-4xl bg-black"
    >
      <AnimatedHeaderText
        subTitle="Behind the scene, Beyond the screen"
        title="Service"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => (
        <div
          key={service.title ?? index}
          className="service-card sticky border-t-2 border-white/30 bg-black px-10 pt-6 pb-12 text-white"
          style={{
            top: 0,
            zIndex: index + 1,
          }}
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex w-full flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">
                {service.title}
              </h2>

              <p className="text-xl leading-relaxed tracking-widest text-pretty text-white/60 lg:text-2xl">
                {service.description}
              </p>

              <div className="flex flex-col gap-2 text-2xl text-white/80 sm:gap-4 lg:text-3xl">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={`item-${index}-${itemIndex}`}
                  >
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>

                      {item.title}
                    </h3>

                    {itemIndex < service.items.length - 1 && (
                      <div className="my-2 h-px w-full bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services