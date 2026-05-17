import { SectionLabel } from './Shared'
import { IconGitHub } from './Icons'

const ui = {
  projects:   { en: 'Projects',        th: 'โปรเจ็ค' },
  viewGithub: { en: 'View on GitHub',  th: 'ดูบน GitHub' },
}

const projects = [
  {
    title: 'Dashboard Website',
    tech:  'Next.js',
    description: {
      en: 'A web application built with Next.js to monitor and track the performance metrics of small businesses.',
      th: 'เว็บไซต์ที่พัฒนาด้วย Next.js เพื่อติดตามผลการดำเนินงานของธุรกิจขนาดเล็ก',
    },
    image:    '/assets/projects/Screenshot_Dashboard.png',
    objectPos: 'center top',
    github: 'https://github.com/Supachok-y/shop_dashboard_web',
  },
  {
    title: 'MoneyTrack',
    tech:  'React Native (Android)',
    description: {
      en: 'An Android application built with React Native for tracking personal finances via SMS, designed specifically for elderly users.',
      th: 'แอปพลิเคชัน Android สำหรับการติดตามการเงินผ่าน SMS สำหรับผู้สูงอายุ',
    },
    image:    '/assets/projects/Screenshot_MoneyTrack.png',
    objectPos: 'center 18%',
    github: 'https://github.com/Supachok-y/MoneyTrack',
  },
]

export default function Projects({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <section className="p-6 mb-4">
      <SectionLabel>{t(ui.projects)}</SectionLabel>
      <div className="space-y-10">
        {projects.map((proj) => (
          <div key={proj.title} className="border border-slate-200 rounded-xl p-6 mb-4">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-slate-200 hover:border-slate-300 transition-colors mb-3"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-52 object-cover" style={{ objectPosition: proj.objectPos }} />
            </a>
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="font-semibold text-slate-800">{proj.title}</h3>
              <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full whitespace-nowrap">
                {proj.tech}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{t(proj.description)}</p>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-2 transition-colors"
            >
              <IconGitHub />
              {t(ui.viewGithub)}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
