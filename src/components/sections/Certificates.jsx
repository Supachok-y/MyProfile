import { useState } from 'react'
import { SectionLabel } from '../ui/Shared'

const ui = {
  certificates: { en: 'Certificates', th: 'ใบรับรอง' },
}

const certificates = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    instructor: 'Dr. Angela Yu',
    date: { en: 'May 2026', th: 'พ.ค. 2569' },
    hours: 62,
    image: '/assets/certificates/Udemy_Full_Stack_developer.png',
  },
  {
    title: 'Introduction to Computer Science',
    issuer: 'BornToDev Open Access Academy',
    instructor: 'Kittikorn Prasertsak',
    date: { en: 'Nov 2025', th: 'พ.ย. 2568' },
    hours: null,
    image: '/assets/certificates/borntodev_intro_computer_science.png',
  },
]

function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default function Certificates({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + certificates.length) % certificates.length)
  const next = () => setIndex((i) => (i + 1) % certificates.length)

  const cert = certificates[index]

  return (
    <section className="p-6 mb-4">
      <SectionLabel>{t(ui.certificates)}</SectionLabel>

      <div className="relative">
        {/* Slide track */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {certificates.map((c) => (
              <img
                key={c.title}
                src={c.image}
                alt={c.title}
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Prev / Next buttons */}
        {certificates.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-slate-200 rounded-full p-1.5 text-slate-600 hover:text-slate-900 shadow-sm transition-colors"
            >
              <IconChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-slate-200 rounded-full p-1.5 text-slate-600 hover:text-slate-900 shadow-sm transition-colors"
            >
              <IconChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="mt-3">
        <p className="font-medium text-slate-800 text-sm">{cert.title}</p>
        <p className="text-slate-500 text-sm mt-0.5">{cert.issuer} · {cert.instructor}</p>
        <p className="text-slate-400 text-xs mt-0.5">{t(cert.date)}{cert.hours ? ` · ${cert.hours} hrs` : ''}</p>
      </div>

      {/* Dot indicators */}
      {certificates.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
