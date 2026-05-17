import { SectionLabel } from './Shared'

const ui = {
  languages: { en: 'Languages', th: 'ภาษา' },
}

const langs = [
  {
    name:    { en: 'Thai',    th: 'ภาษาไทย' },
    reading: { en: 'Native',  th: 'เจ้าของภาษา' },
    speaking:{ en: 'Native',  th: 'เจ้าของภาษา' },
  },
  {
    name:    { en: 'English', th: 'ภาษาอังกฤษ' },
    reading: { en: 'Intermediate', th: 'พื้นฐาน' },
    speaking:{ en: 'Elementary',   th: 'พื้นฐาน' },
  },
]

export default function Languages({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <section className="p-6 mb-4">
      <SectionLabel>{t(ui.languages)}</SectionLabel>
      <div className="space-y-2">
        {langs.map((l) => (
          <div key={l.name.en} className="flex items-baseline gap-3">
            <span className="font-medium text-slate-800 text-sm w-24 shrink-0">{t(l.name)}</span>
            <span className="text-slate-500 text-sm">
              {t(l.reading)} &nbsp;·&nbsp; {t(l.speaking)}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
