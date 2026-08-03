import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLine = ({ text, className, isReady = true }) => {
    const containerRef = useRef(null)
    // const lineRef = useRef([])
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    useGSAP(() => {
        gsap.from(".animated-line",
            
            {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                }
            })
    }, { scope: containerRef , dependencies:[text]})
    return (
        <div ref={containerRef} className={className}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    // ref={(el) => (lineRef.current[index] = el)}
                    className='animated-line block leading-relaxed tracking-wide text-pretty'>{line}</span>
            ))}
        </div>
    )
}

export default AnimatedTextLine
