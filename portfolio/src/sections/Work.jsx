import { useRef, useState } from "react"
import AnimatedHeaderText from "../components/AnimatedHeaderText"
import { projects } from "../constants"
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Work = () => {

  const text = `Here are my featured projects built carefully with passion,
  and hard work to solve real problems,
  delivering truly great result.`

  const previewRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const moveX = useRef(null)
  const moveY = useRef(null)
  const overlayRef = useRef([])
  const mouse = useRef({
    x:0,
    y:0
  })

  useGSAP(()=>{
    moveX.current = gsap.quickTo(previewRef.current,"x",{
      duration:1.5,
      ease:"power3.out"
    })

    moveY.current = gsap.quickTo(previewRef.current,"y",{
      duration:2,
      ease:"power3.out"
    })

    gsap.from("#project",{
      y:100,
      opacity:0,
      delay:0.5,
      duration:1,
      stagger:0.3,
      ease:"back.out",
      scrollTrigger:{
        trigger:"#project"
      }
    })
  },[])


  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index)

    const el = overlayRef.current[index]
    if(!el) return

    gsap.killTweensOf(el)
    gsap.fromTo(el,
      {
        clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
      },
      {
        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration:0.15,
        ease:"power2.out"
      }
    )

    gsap.to(previewRef.current, {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      ease: "power2.out"
    })

  }

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null)

    const el = overlayRef.current[index]
    if(!el) return

    gsap.killTweensOf(el)
    gsap.to(el,{
        clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration:0.20,
        ease:"power2.out"
      },
      
    )

    gsap.to(previewRef.current, {
      opacity: 0,
      duration: 0.4,
      scale: 0.90,
      ease: "power2.out"
    })

  }

  const handleMouseMove = (e)=>{
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24
    mouse.current.y = e.clientY + 24
    moveX.current(mouse.current.x)
    moveY.current(mouse.current.y)
  }
  return (
    <section id='work' className='min-h-screen
    flex flex-col'>
      <AnimatedHeaderText
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true} />

      <div 
      className="relative flex flex-col font-light"
      onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <div key={project.id} id="project"
            className=" relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            >
            
            {/* overlay */}
            <div className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            ref={(el)=>{overlayRef.current[index]=el}}/>
            {/* title */}
            <div className=" flex flex-row items-center justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className=" lg:text-[32px] text-[26px] leading-none">{project.name}</h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-black/80" />

            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white">
                  {framework.name}
                </p>
              ))}
            </div>

            {/* mobile preview images */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-100">
              <img src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className=" object-cover w-full h-full rounded-lg brightness-50" />

              <img src={project.image} alt={`${project.name}-image`}
                className=" absolute  bg-center px-14 rounded-xl" />
            </div>
          </div>
        ))}

        {/* desktop view */}
        <div ref={previewRef} className=" fixed -top-2/6 left-0 z-40 overflow-hidden border-8 border-black pointer-events-none w-[55vw] md:block hidden opacity-0">
          {currentIndex !== null && (
            <img src={projects[currentIndex].image} alt="preview"
              className="object-cover w-full h-full" />
          )}
        </div>
      </div>
    </section>
  )
}

export default Work
