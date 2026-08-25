import { useRef, useState } from 'react'
import { socials } from '../constants/index'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'

const navLinks = ['home', 'services', 'about', 'work', 'contact']

const Navbar = () => {
  const containerRef = useRef(null)
  const navRef = useRef(null)
  const linkRefs = useRef([])
  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const contactRef = useRef(null)

  const tl = useRef(null)
  const toggleTl = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  useGSAP(
    () => {
      const navItems = linkRefs.current

      // Initial navigation state
      gsap.set(navRef.current, {
        xPercent: 100,
      })

      gsap.set(navItems, {
        x: -20,
        autoAlpha: 0,
      })

      gsap.set(contactRef.current, {
        x: -20,
        autoAlpha: 0,
      })

      // Navigation drawer animation
      tl.current = gsap
        .timeline({ paused: true })
        .to(navRef.current, {
          xPercent: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        })
        .to(
          navItems,
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          contactRef.current,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.2'
        )

      // Hamburger animation
      toggleTl.current = gsap
        .timeline({ paused: true })
        .to(topLineRef.current, {
          rotate: 45,
          y: 4,
          duration: 0.3,
          ease: 'power2.inOut',
        })
        .to(
          bottomLineRef.current,
          {
            rotate: -45,
            y: -4,
            duration: 0.3,
            ease: 'power2.inOut',
          },
          '<'
        )
    },
    {
      scope: containerRef,
    }
  )

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse()
      toggleTl.current?.reverse()
    } else {
      tl.current?.play()
      toggleTl.current?.play()
    }

    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    if (!isOpen) return

    tl.current?.reverse()
    toggleTl.current?.reverse()

    setIsOpen(false)
  }

  return (
    <header ref={containerRef}>
      {/* Navigation Drawer */}
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className="fixed top-0 right-0 z-50 flex h-full w-full flex-col justify-between bg-black px-10 py-[10vh] uppercase text-white/60 sm:py-[5vh] md:w-1/2 lg:py-[5vh]"
      >
        {/* Navigation Links */}
        <div className="flex flex-col text-[6vw] md:text-[5vw] lg:text-[4vw]">
          {navLinks.map((section, index) => (
            <div
              key={section}
              ref={(element) => {
                linkRefs.current[index] = element
              }}
            >
              <Link
                to={section}
                smooth
                offset={0}
                duration={1500}
                onClick={closeMenu}
                className="cursor-pointer tracking-wider transition-colors duration-300 hover:text-white"
              >
                {section}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact + Socials */}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          {/* Email */}
          <div className="font-light">
            <p className="tracking-wider text-white/50">
              E-mail
            </p>

            <a
              href="mailto:DARSHANNIKAM64@gmail.com"
              className="text-xl lowercase tracking-widest text-pretty transition-colors hover:text-white"
            >
              DARSHANNIKAM64@gmail.com
            </a>
          </div>

          {/* Social Media */}
          <div className="font-light">
            <p className="tracking-wider text-white/50">
              Social Media
            </p>

            <div className="flex flex-col flex-wrap gap-x-2 md:flex-row">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white"
                >
                  {`{ ${social.name} }`}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="fixed right-10 top-4 z-60 flex h-14 w-14 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-2xl transition-transform duration-300 will-change-transform mix-blend-difference hover:scale-95 active:scale-110 md:h-20 md:w-20"
      >
        <span
          ref={topLineRef}
          className="block h-0.5 w-7 origin-center rounded-full bg-white mix-blend-difference md:h-1 md:w-11"
        />

        <span
          ref={bottomLineRef}
          className="block h-0.5 w-7 origin-center rounded-full bg-white mix-blend-difference md:h-1 md:w-11"
        />
      </button>
    </header>
  )
}

export default Navbar