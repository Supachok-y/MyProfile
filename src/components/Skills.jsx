import { SectionLabel } from './Shared'

const ui = {
  skills: { en: 'Skills', th: 'ทักษะ' },
}

const skills = {
  'Languages':              ['JavaScript', 'TypeScript (Beginner)', 'Java (Beginner)', 'SQL', 'PostgreSQL', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['React', 'React Native', 'Next.js', 'TailwindCSS', 'Express', 'Prisma', 'Zod', 'JWT'],
  'Tools':                  ['VSCode', 'Git', 'DBeaver', 'Android Studio', 'Claude Code', 'Postman', 'Vercel'],
}

const skillsLabel = {
  'Languages':              { en: 'Languages',              th: 'ภาษาโปรแกรม' },
  'Frameworks & Libraries': { en: 'Frameworks & Libraries', th: 'Frameworks & Libraries' },
  'Tools':                  { en: 'Tools',                  th: 'Tools' },
}

export default function Skills({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <section className="p-6 mb-4">
      <SectionLabel>{t(ui.skills)}</SectionLabel>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <span className="text-slate-400 text-sm w-44 shrink-0 pt-0.5">
              {t(skillsLabel[category])}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
