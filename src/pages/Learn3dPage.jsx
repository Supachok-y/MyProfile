import { Link } from 'react-router-dom'
import CoinBackground from '../components/three/CoinBackground'
import Scene3D from '../components/three/Scene3D'

export default function Learn3dPage() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ position: 'relative' }}>
      <CoinBackground />
      <main className="max-w-2xl mx-auto px-6 py-16" style={{ position: 'relative', zIndex: 1 }}>
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">3D Learning</h1>
        <Scene3D />

        <section className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Credits</h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">Coin 3D Model</span>
            <span className="text-gray-300">—</span>
            <a
              href="https://sketchfab.com/3d-models/coin-7d9b49c9ede348eab0a4ccaf46b3a44f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-500 hover:text-indigo-700 transition-colors underline underline-offset-2"
            >
              Sketchfab
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
