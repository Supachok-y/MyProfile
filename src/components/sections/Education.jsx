import { SectionLabel } from '../ui/Shared'

const ui = {
  education: { en: 'Education', th: 'การศึกษา' },
  honors:    { en: 'Second Class Honors', th: 'เกียรตินิยมอันดับ 2' },
}

const education = {
  institution: {
    en: 'Suan Sunandha Rajabhat University',
    th: 'มหาวิทยาลัยราชภัฏสวนสุนันทา',
  },
  degree: {
    en: 'Bachelor of Business Administration (BBA)',
    th: 'บริหารธุรกิจบัณฑิต (บธ.บ.)',
  },
}

export default function Education({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <section className="p-6 mb-4">
      <SectionLabel>{t(ui.education)}</SectionLabel>
      <div>
        <p className="font-medium text-slate-800">{t(education.institution)}</p>
        <p className="text-slate-600 text-sm mt-0.5">{t(education.degree)}</p>
        <p className="text-slate-500 text-sm mt-0.5">
          {t(ui.honors)} &nbsp;·&nbsp; GPA 3.56 &nbsp;·&nbsp; 2023
        </p>
      </div>
    </section>
  )
}
