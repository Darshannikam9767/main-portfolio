import { Suspense, useRef, lazy } from 'react'
import AnimatedTextLine from './AnimatedTextLine'

import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Environment, Float, Lightformer } from '@react-three/drei'
import AnimatedHeaderText from './AnimatedHeaderText'

const Planet = lazy(() => import('./Planet').then(module => ({ default: module.Planet })))
const Hero = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const text = `i build full-stack web applications —
    clean code, smart features,
    shipped from idea to production.`


    return (
        <section id='home'
            className=' relative flex flex-col justify-end min-h-screen overflow-hidden'>
            <AnimatedHeaderText subTitle={"404 No bugs found"} title={"Darshan Nikam"} text={text} textColor={"text-black"} isDelay={true} />
            <figure className=' absolute inset-0 -z-50 w-screen h-screen'>
                <Canvas className=' overflow-hidden'
                    dpr={[1, 1.5]}
                    gl={{
                        powerPreference: "high-performance",
                        antialias: true
                    }}
                    camera={{
                        position: [0, 0, -10],
                        fov: 17.5,
                        near: 1,
                        far: 20
                    }}>
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <Float speed={0.5}>
                            <Planet scale={isMobile ? 0.60 : 0.90} />
                        </Float>
                    </Suspense>
                    <Environment resolution={128}>
                        <group rotation={[Math.PI / 3, 4, 1]}>
                            <Lightformer form={"circle"}
                                intensity={2}
                                position={[0, 5, -5]}
                                scale={10} />

                            <Lightformer form={"circle"}
                                intensity={2}
                                position={[0, 3, 1]}
                                scale={10} />

                            <Lightformer form={"circle"}
                                intensity={2}
                                position={[-5, -1, -1]}
                                scale={10} />

                            <Lightformer form={"circle"}
                                intensity={2}
                                position={[10, 1, 0]}
                                scale={16} />
                        </group>
                    </Environment>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero
