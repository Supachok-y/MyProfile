import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, OrbitControls, Stars } from '@react-three/drei'

function CoinModel({ scrollProgress }) {
  const { scene } = useGLTF('/assets/models/coin.gltf')
  const groupRef = useRef()
  const baseRotation = useRef(0)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    baseRotation.current += delta * 0.6
    groupRef.current.rotation.y = baseRotation.current + scrollProgress * Math.PI * 4
    groupRef.current.rotation.x = Math.sin(baseRotation.current * 0.3) * 0.15
  })

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={0.38} />
      </Center>
    </group>
  )
}

export default function Scene3D() {
  const sectionRef = useRef()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight))
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="my-12 rounded-2xl overflow-hidden"
      style={{ height: '420px', background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f172a 60%, #020617 100%)' }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fde68a" />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#818cf8" />
        <pointLight position={[0, 3, 3]} intensity={0.8} color="#fbbf24" />
        <CoinModel scrollProgress={scrollProgress} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div
        className="absolute bottom-0 left-0 right-0 text-center pb-3 text-xs tracking-widest text-indigo-300 opacity-60 select-none pointer-events-none"
        style={{ position: 'relative' }}
      >
        SCROLL TO ROTATE
      </div>
    </section>
  )
}
