import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import {
    Environment,
    Float,
    Lightformer,
} from '@react-three/drei'

import AnimatedHeaderText from './AnimatedHeaderText'
import { Planet } from './Planet'

const Hero = () => {
    const isMobile = useMediaQuery({
        maxWidth: 768,
    })

    const text = `i build full-stack web applications —
clean code, smart features,
shipped from idea to production.`

    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col justify-end overflow-hidden"
        >
            <AnimatedHeaderText
                subTitle="404 No bugs found"
                title="Darshan Nikam"
                text={text}
                textColor="text-black"
                isDelay={true}
            />

            <figure className="absolute inset-0 -z-50 h-screen w-screen">
                <Canvas
                    className="overflow-hidden"
                    dpr={isMobile ? 1 : [1, 1.5]}
                    gl={{
                        powerPreference: 'high-performance',
                        antialias: !isMobile,
                    }}
                    camera={{
                        position: [0, 0, -10],
                        fov: 17.5,
                        near: 1,
                        far: 20,
                    }}
                >
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={null}>
                        <Float speed={isMobile ? 0.3 : 0.5}>
                            <Planet scale={isMobile ? 0.6 : 0.9} />
                        </Float>

                        <Environment
                            resolution={isMobile ? 64 : 128}
                        >
                            <group rotation={[Math.PI / 3, 4, 1]}>
                                <Lightformer
                                    form="circle"
                                    intensity={2}
                                    position={[0, 5, -5]}
                                    scale={10}
                                />

                                <Lightformer
                                    form="circle"
                                    intensity={2}
                                    position={[0, 3, 1]}
                                    scale={10}
                                />

                                <Lightformer
                                    form="circle"
                                    intensity={2}
                                    position={[-5, -1, -1]}
                                    scale={10}
                                />

                                <Lightformer
                                    form="circle"
                                    intensity={2}
                                    position={[10, 1, 0]}
                                    scale={16}
                                />
                            </group>
                        </Environment>
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero