import { useEffect, useRef, useState } from 'react'
import { socials } from '../constants/index'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'
const Navbar = () => {

    const navRef = useRef(null)
    const linkRef = useRef([])
    const contactRef = useRef(null)
    const topLineRef = useRef(null)
    const bottomLineRef = useRef(null)
    const tl = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggleTl = useRef(null)
    const [showMenuBtn, setShowMenuBtn] = useState(true)

    useGSAP(() => {
        gsap.set(navRef.current, {
            xPercent: 100
        })
        gsap.set(linkRef.current, {
            x: -20,
            autoAlpha: 0
        })
        gsap.set(contactRef.current, {
            x: -20,
            autoAlpha: 0
        })

        tl.current = gsap.timeline({ paused: true }).to(navRef.current, {
            xPercent: 0,
            duration: 1,
            ease: "power3.in"
        }).to(linkRef.current, {
            autoAlpha: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out"
        }, "same"
        ).to(contactRef.current, {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "same+0.2")


        toggleTl.current = gsap.timeline({ paused: true }).to(topLineRef.current, {
            rotate: 45,
            y: 4,
            duration: 0.3,
            ease: "power2.inOut"
        }).to(bottomLineRef.current, {
            rotate: -45,
            y: -4,
            duration: 0.3,
            ease: "power2.inOut"
        }, "<")
    }, [])


    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setShowMenuBtn(currentScrollY <= lastScrollY ||
                currentScrollY < 10
            )

            lastScrollY = currentScrollY
        }
        window.addEventListener("scroll", handleScroll, {
            passive: true
        })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        if (isOpen) {
            tl.current.reverse()
            toggleTl.current.reverse()
        } else {
            tl.current.play()
            toggleTl.current.play()
        }
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        if(isOpen){
            tl.current.reverse()
            toggleTl.current.reverse()
            setIsOpen(false)
        }
    }

    return (
        <>
            <nav ref={navRef} className='w-full h-full fixed z-50 flex flex-col justify-between px-10 uppercase bg-black text-white/60 py-[10vh] sm:py-[5vh] lg:py-[5vh] gap-y-5 md:w-1/2 md:left-1/2'>
                <div className='flex flex-col text-[6vw] md:text-[5vw] lg:text-[4vw]'>
                    {["home", "services", "about", "work", "contact"]
                        .map((section, index) => (
                            <div key={index} ref={(el) => (linkRef.current[index] = el)}>

                                <Link className=' transition-all duration-300 cursor-pointer hover:text-white '
                                    to={`${section}`}
                                    smooth
                                    offset={0}
                                    duration={600}
                                    onClick={closeMenu}
                                >{section}</Link>
                            </div>
                        ))}
                </div>


                <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
                    <div className='font-light'>
                        <p className=' tracking-wider text-white/50'>E-mail</p>
                        <p className='text-xl lowercase tracking-widest text-pretty '>DARSHANNIKAM64@gmail.com</p>
                    </div>
                    <div className=' font-light'>
                        <p className='tracking-wider text-white/50'>Social Media</p>
                        <div className=' flex flex-col flex-wrap md:flex-row gap-x-2'>
                            {socials.map((social, index) => (
                                <a key={index} className=' leading-loose text-sm tracking-widest uppercase hover:text-white transition-all duration-300' href={social.href}>
                                    {"{ "}
                                    {social.name}
                                    {" }"}
                                </a>

                            ))}
                        </div>
                    </div>
                </div>

            </nav>

            <div
                style={showMenuBtn ?
                    { clipPath: "circle(50% at 50% 50%)" }
                    : { clipPath: "circle(0% at 50% 50%)" }
                }
                onClick={toggleMenu} 
                className=' fixed flex flex-col z-60 items-center justify-center gap-1.5 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10 shadow-2xl shadow-black hover:bg-black/80 hover:scale-95 active:scale-115'>
                <span ref={topLineRef}
                    className='block w-7 h-0.5 md:w-11 md:h-1 bg-white rounded-full origin-center'/>
                <span ref={bottomLineRef}
                    className='block w-7 h-0.5 md:w-11 md:h-1 bg-white rounded-full origin-center'/>
            </div>
        </>
    )
}

export default Navbar
