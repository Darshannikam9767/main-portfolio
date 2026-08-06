import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'
gsap.registerPlugin(ScrollTrigger)
const Services = () => {

    const isMobile = useMediaQuery({maxWidth:768})

    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                target: "#title-service-1",
                scrub: true,

            }
        })

        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                target: "#title-service-2",
                scrub: true,

            }
        })

        gsap.to("#title-service-3", {
            xPercent: isMobile? 300 : 100,
            scrollTrigger: {
                target: "#title-service-3",
                scrub: true,

            }
        })

        gsap.to("#title-service-4", {
            xPercent: isMobile ? -200 : -100,
            scrollTrigger: {
                target: "#title-service-4",
                scrub: true,

            }
        })
    }, [])


    

    return (
        <section className='mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive'>

            <div id='title-service-1'>
                <p className=' font-extralight'>Architecture</p>
            </div>

            <div id='title-service-2'
                className='flex items-center justify-center gap-3 translate-x-13'>
                <p className='font-semibold'>Development</p>
                
                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p className='font-extralight'>Deployment</p>
            </div>

            <div id='title-service-3' className='flex items-center justify-center gap-3 -translate-x-40'>
                <p>APIs</p>
                
                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p className=' italic'>Frontend</p>
                <div className='bg-gold w-10 h-1 md:w-32 rounded-full' />
                <p>Automation</p>
            </div>

            <div id='title-service-4' className='translate-x-42'>
                <p>Databases</p>
            </div>
        </section>
    )
}

export default Services