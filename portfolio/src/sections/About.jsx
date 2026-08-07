import { useRef } from "react"
import AnimatedHeaderText from "../components/AnimatedHeaderText"
import AnimatedTextLine from "../components/AnimatedTextLine"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    const aboutRef = useRef(null)
    const text = `self-directed full-stack developer crafting robust APIs and
    responsive interfaces, delivering scalable solutions
    from prototype to production.`

    const aboutText = `Full-Stack Developer and BCA graduate (8.46 CGPA). I build complete web applications, pairing robust Python and Java backends with dynamic React interfaces. 
    When I'am not shipping:
    ⚡ Experimenting with react and tailwind to build stunning, user-friendly web interfaces 
    ⚙️ Architecting robust backend systems and REST APIs with Python, Flask, and PostgreSQL
    🌌 Animating the web with GSAP and Three.js for that perfect scroll experience
    🎓 Deep diving into advanced Data Structures and Object-Oriented Programming`

    const imgRef = useRef(null)

    useGSAP(() => {
        gsap.to(aboutRef.current, {
            scale: 0.90,
            force3D: true,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                invalidateOnRefresh: true
            },
            ease: "power1.inOut"
        })

        gsap.set(imgRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        })

        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top 50%",
                invalidateOnRefresh: true
            }
        })
    }, { scope: aboutRef })
    return (
        <section
            ref={aboutRef}
            id="about"
            className="min-h-screen bg-black rounded-b-4xl pt-[10vh]">
            <AnimatedHeaderText subTitle={"Code with purpose, Built to scale"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true} />
            <div
                className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img ref={imgRef} src="images/my_img.png" alt="man"
                    className="w-xs sm:w-md md:w-sm lg:w-sm rounded-3xl" />
                <AnimatedTextLine text={aboutText} className={"w-full"} />
            </div>
        </section>
    )
}

export default About
