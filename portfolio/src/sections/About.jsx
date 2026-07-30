import { useRef } from "react"
import AnimatedHeaderText from "../components/AnimatedHeaderText"
import AnimatedTextLine from "../components/AnimatedTextLine"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    const text = `Passionate about clean architecture
    I build scalable, High-performance solutions
    for prototype to production`

    const aboutText = `Obsessed with building fast, intuitive apps-from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is promise: quality that users feel. 
    When I'am not shipping:
    ⚡ Open-sourcing my latest experiment (or hacking on yours) 
    🎥 Teaching devs on Twitch/Youtube-because rising tides lift all ships 
    🧗 Rock climbing (problem-solving with real stakes) 
    🎸 Struming chords while CI pipelines pass (multitasking at its finest)`

    const imgRef = useRef(null)

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.90,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
            },
            ease: "power1.inOut"
        })

        gsap.set(imgRef.current,{
            clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        })

        gsap.to(imgRef.current,{
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            scrollTrigger:{
                trigger:imgRef.current,
            }
        })
    }, [])
    return (
        <section id="about"
            className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderText subTitle={"Code with purpose, Built to scale"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true} />
            <div
                ref={imgRef}
                className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img src="images/man.jpg" alt="man"
                    className="w-md rounded-3xl" />
                <AnimatedTextLine text={aboutText} className={"w-full"} />
            </div>
        </section>
    )
}

export default About
