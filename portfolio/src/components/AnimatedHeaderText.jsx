import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import AnimatedTextLine from './AnimatedTextLine'
gsap.registerPlugin(ScrollTrigger)
const AnimatedHeaderText = ({subTitle, title, text, textColor, withScrollTrigger = false, isDelay = false}) => {

    const contextRef = useRef(null)
    const headerRef = useRef(null)
    


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:withScrollTrigger ?{
                trigger:contextRef.current,
            }
            :undefined
        })

        tl.from(contextRef.current, {
            delay:isDelay ? 2 : undefined,
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })

        tl.from(headerRef.current, {
            opacity: 0,
            y: 200,
            duration: 1,
            ease: "circ.out"
        }, "<+0.2")
    }, [])

    return (
        <div ref={contextRef}>
            <div style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}>
                <div ref={headerRef} className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
                    <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>
                        {subTitle}
                    </p>

                    <div className='px-10 '>
                        <h1 className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block `}>{title}</h1>
                    </div>
                </div>
            </div>
            <div className={`relative px-10 ${textColor}`}>
                <div className=' absolute inset-x-0 border-t-2' />
                <div className='py-12 sm:py-16 text-end overflow-hidden'>
                    <AnimatedTextLine className={'font-light uppercase value-text-responsive'} text={text}  />
                </div>
            </div>
        </div>
    )
}

export default AnimatedHeaderText
