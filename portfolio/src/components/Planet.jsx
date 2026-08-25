import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function Planet(props) {
  const { nodes, materials } = useGLTF('/models/Planet.glb')

  const shapeContainer = useRef(null)
  const sphereContainer = useRef(null)
  const ringContainer = useRef(null)

  useGSAP(
    () => {
      const timeline = gsap.timeline()

      timeline
        .from(shapeContainer.current.position, {
          y: 5,
          duration: 3,
          ease: 'circ.out',
        })
        .from(
          sphereContainer.current.rotation,
          {
            x: 0,
            y: Math.PI,
            z: -Math.PI,
            duration: 10,
            ease: 'power1.inOut',
          },
          '-=25%'
        )
        .from(
          ringContainer.current.rotation,
          {
            x: 0.8,
            y: 0,
            z: 0,
            duration: 10,
            ease: 'power1.inOut',
          },
          '<'
        )
    },
    {
      scope: shapeContainer,
    }
  )

  return (
    <group
      ref={shapeContainer}
      {...props}
      dispose={null}
    >
      <group ref={sphereContainer}>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, 0.741]}
        />

        <mesh
          geometry={nodes.Sphere2.geometry}
          material={materials['Material.001']}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>

      <mesh
        ref={ringContainer}
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  )
}

useGLTF.preload('/models/Planet.glb')