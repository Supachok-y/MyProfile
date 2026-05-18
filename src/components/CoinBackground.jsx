import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'

// x: left = negative, right = positive  |  y: up = positive, down = negative
// phase: starting rotation offset (radians) so coins don't all spin in sync
const COINS = [
  // Left side
  { id: 0, x: -4.8, y:  3.0, scale: 0.20, speed: 0.35, scrollMult: 0.003, phase: 0.0 },
  { id: 1, x: -5.4, y:  1.0, scale: 0.15, speed: 0.50, scrollMult: 0.005, phase: 1.8 },
  { id: 2, x: -4.5, y: -1.2, scale: 0.22, speed: 0.28, scrollMult: 0.004, phase: 3.5 },
  { id: 3, x: -5.1, y: -3.0, scale: 0.17, speed: 0.42, scrollMult: 0.006, phase: 1.1 },
  // Right side
  { id: 4, x:  4.9, y:  2.5, scale: 0.17, speed: 0.38, scrollMult: 0.004, phase: 2.2 },
  { id: 5, x:  5.3, y:  0.5, scale: 0.22, speed: 0.30, scrollMult: 0.003, phase: 0.7 },
  { id: 6, x:  4.6, y: -1.5, scale: 0.15, speed: 0.48, scrollMult: 0.005, phase: 4.0 },
  { id: 7, x:  5.0, y: -3.2, scale: 0.19, speed: 0.33, scrollMult: 0.006, phase: 2.8 },
]

function SmallCoin({ x, y, scale, speed, scrollY, scrollMult, phase }) {
  const { scene } = useGLTF('/assets/models/coin.gltf')
  const cloned = useMemo(() => scene.clone(true), [scene])
  const ref = useRef()
  const rot = useRef(phase)

  useFrame((_, delta) => {
    if (!ref.current) return
    rot.current += delta * speed
    ref.current.rotation.y = rot.current + scrollY * scrollMult
    ref.current.rotation.x = Math.sin(rot.current * 0.3) * 0.12
  })

  return (
    <group ref={ref} position={[x, y, 0]}>
      <Center>
        <primitive object={cloned} scale={scale} />
      </Center>
    </group>
  )
}

export default function CoinBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.18,
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#fde68a" />
        <directionalLight position={[-4, -2, -4]} intensity={0.5} color="#fbbf24" />
        {COINS.map((c) => (
          <SmallCoin key={c.id} {...c} scrollY={scrollY} />
        ))}
      </Canvas>
    </div>
  )
}
