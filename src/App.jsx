import { useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Hero lang={lang} setLang={setLang} />
        <Education lang={lang} />
        <Languages lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Footer />
      </main>
    </div>
  )
}
