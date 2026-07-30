import AnimatedHeaderText from "../components/AnimatedHeaderText"
import { projects } from "../constants"
const Work = () => {

  const text = `Featured projects that have been meticulously
  crafted with passion to drive
  results and impact.`
  return (
    <section id='works' className='min-h-screen
    flex flex-col'>
      <AnimatedHeaderText 
      subTitle={"Logic meets Aesthetics, Seamlessly"} 
      title={"Works"} 
      text={text} 
      textColor={"text-black"} 
      withScrollTrigger={true} />

      <div className="relative flex flex-col font-light">

      </div>
    </section>
  )
}

export default Work
