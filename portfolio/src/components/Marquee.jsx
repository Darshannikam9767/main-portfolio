import { Icon } from '@iconify/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(Observer)
const Marquee = ({
    items,
    className = "text-white bg-black",
    icon = "mdi:star-four-points",
    iconClassName = "",
    reverse = false
}) => {
    const containerRef = useRef(null)
    const itemsRef = useRef([])
    const spanRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(spanRef.current,
            {
                xPercent: reverse ? -50 : 0
            },
            {
                xPercent: reverse ? 0 : -50,
                duration: 20,
                repeat: -1,
                ease: "none"
            })
    }, [reverse])


    return (
        <div ref={containerRef}
            className={` overflow-hidden w-full h-20 md:h-25 flex items-center marquee-text-responsive font-light uppercase whitespace-normal ${className}`}
        >
            <div ref={spanRef} className='flex'>
                {items.map((item, index) => (
                    <span
                        key={index}
                        className='flex items-center px-16 gap-x-32 text-nowrap'
                        ref={(el) => (itemsRef.current[index] = el)}>
                        {item}
                        <Icon icon={icon} className={iconClassName} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Marquee
