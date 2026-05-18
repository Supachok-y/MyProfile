import { useRef, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Center, OrbitControls, Stars, Html } from '@react-three/drei'

const MARKERS = [
  {
    id: 0,
    position: [0, 0, 0],
    label: 'Just coin',
    info: 'Just coin',
  },
]

function Marker({ position, label, info }) {
  const [open, setOpen] = useState(false)

  return (
    <Html position={position} center zIndexRange={[10, 0]}>
      <div style={{ position: 'relative', userSelect: 'none' }}>
        {/* dot */}
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: open ? '#818cf8' : 'rgba(255,255,255,0.9)',
            border: '2px solid #818cf8',
            cursor: 'pointer',
            boxShadow: '0 0 8px rgba(129,140,248,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            fontWeight: 700,
            color: open ? '#fff' : '#818cf8',
            transition: 'background 0.15s',
          }}
        >
          i
        </button>

        {/* popup */}
        {open && (
          <div
            style={{
              position: 'absolute',
              bottom: 26,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(15,23,42,0.95)',
              border: '1px solid rgba(129,140,248,0.4)',
              color: '#e0e7ff',
              padding: '10px 14px',
              borderRadius: 10,
              fontSize: 12,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 4, color: '#a5b4fc' }}>{label}</div>
            <div style={{ opacity: 0.85, lineHeight: 1.5 }}>{info}</div>
          </div>
        )}
      </div>
    </Html>
  )
}

function CoinModel() {
  const { scene } = useGLTF('/assets/models/coin.gltf')
  const cloned = useMemo(() => scene.clone(true), [scene])

  return (
    <group>
      <Center>
        <primitive object={cloned} scale={0.38} />
      </Center>
      {MARKERS.map((m) => (
        <Marker key={m.id} position={m.position} label={m.label} info={m.info} />
      ))}
    </group>
  )
}

export default function CoinDraggable() {
  const controlsRef = useRef()

  return (
    <section
      className="my-12 rounded-2xl overflow-hidden relative"
      style={{ height: '420px', background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f172a 60%, #020617 100%)' }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fde68a" />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#818cf8" />
        <pointLight position={[0, 3, 3]} intensity={0.8} color="#fbbf24" />
        <CoinModel />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>
      <div className="absolute bottom-3 left-0 right-0 text-center text-xs tracking-widest text-indigo-300 opacity-60 select-none pointer-events-none">
        DRAG TO ROTATE · CLICK <span style={{ fontWeight: 700 }}>i</span> TO LEARN
      </div>
    </section>
  )
}
