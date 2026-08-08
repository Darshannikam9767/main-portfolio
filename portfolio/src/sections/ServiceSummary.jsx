import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'
gsap.registerPlugin(ScrollTrigger)
const Services = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const sectionRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const title4Ref = useRef(null);

    useGSAP(() => {
        gsap.to(title1Ref.current, {
            xPercent: 20,
            scrollTrigger: {
                trigger: title1Ref.current,
                scrub: 0.5,

            }
        })

        gsap.to(title2Ref.current, {
            xPercent: -30,
            scrollTrigger: {
                trigger: title2Ref.current,
                scrub: 0.5,

            }
        })

        gsap.to(title3Ref.current, {
            xPercent: isMobile ? 100 : 30,
            scrollTrigger: {
                trigger: title3Ref.current,
                scrub: 0.5,

            }
        })

        gsap.to(title4Ref.current, {
            xPercent: isMobile ? -100 : -30,
            scrollTrigger: {
                trigger: title4Ref.current,
                scrub: 0.5,

            }
        })
    }, {scope : sectionRef, dependencies: [isMobile]})




    return (
        <section ref={sectionRef} className='mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive'>

            <div ref={title1Ref}>
                <p className=' font-extralight'>Architecture</p>
            </div>

            <div ref={title2Ref}
                className='flex items-center justify-center gap-3 translate-x-13'>
                <p className='font-semibold'>Development</p>

                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p className='font-extralight'>Deployment</p>
            </div>

            <div ref={title3Ref}
                className='flex items-center justify-center gap-3 -translate-x-40'>
                <p>APIs</p>

                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p className=' italic'>Frontend</p>
                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p>Automation</p>
            </div>

            <div ref={title4Ref}
                className='translate-x-42'>
                <p>Databases</p>
            </div>
        </section>
    )
}

export default Services