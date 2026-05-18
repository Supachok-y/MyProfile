import { useState } from 'react'
import Hero from '../components/sections/Hero'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Languages from '../components/sections/Languages'
import Certificates from '../components/sections/Certificates'
import Footer from '../components/sections/Footer'
import CoinBackground from '../components/three/CoinBackground'

export default function HomePage() {
  const [lang, setLang] = useState('en')
  return (
    <div className="min-h-screen bg-white font-sans" style={{ position: 'relative' }}>
      <CoinBackground />
      <main className="max-w-2xl mx-auto px-6 py-16" style={{ position: 'relative', zIndex: 1 }}>
        <Hero lang={lang} setLang={setLang} />
        <Education lang={lang} />
        <Languages lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Certificates lang={lang} />
        <Footer />
      </main>
    </div>
  )
}
