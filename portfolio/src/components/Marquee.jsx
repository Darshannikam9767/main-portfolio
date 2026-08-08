import { Icon } from '@iconify/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Marquee = ({
    items,
    className = "text-white bg-black",
    icon = "mdi:star-four-points",
    iconClassName = "",
    reverse = false
}) => {
    const containerRef = useRef(null)
    const spanRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(spanRef.current,
            {
                xPercent: reverse ? -50 : 0
            },
            {
                xPercent: reverse ? 0 : -50,
                duration: 25, 
                repeat: -1,
                ease: "none"
            })
    }, { scope: spanRef, dependencies: [reverse] })

    const duplicatedItems = [...items, ...items]

    return (
        <div 
            ref={containerRef}
            className={`overflow-hidden w-full h-20 md:h-25 flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
        >
            <div ref={spanRef} className='flex items-center shrink-0'>
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center px-16 gap-x-32 text-nowrap shrink-0'>
                        <span>{item}</span>
                        <Icon icon={icon} className={iconClassName} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee