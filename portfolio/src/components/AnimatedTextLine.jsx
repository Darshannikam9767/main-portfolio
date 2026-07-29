import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const AnimatedTextLine = ({ text, className }) => {
    const containerRef = useRef(null)
    const lineRef = useRef([])
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    useGSAP(()=>{
        if(lineRef.current.length > 0){
            gsap.from(lineRef.current,{
                y:100,
                opacity:0,
                duration:1,
                stagger:0.3,
                ease:'back.out',
            })
        }
    },[])
    return (
        <div ref={containerRef} className={className}>
            {lines.map((line,index)=>(
                <span 
                key={index}
                ref={(el)=>(lineRef.current[index] = el)}
                className='block leading-relaxed tracking-wide text-pretty'>{line}</span>
            ))}
        </div>
    )
}

export default AnimatedTextLine
