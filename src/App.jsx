import { useState } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────

const GITHUB = 'https://github.com/Supachok-y'
const EMAIL = 'supachok.yotphet@gmail.com'
const PHONE = '062-357-5698'

const ui = {
  education: { en: 'Education', th: 'การศึกษา' },
  experience: { en: 'Experience', th: 'ประสบการณ์ทำงาน' },
  projects:   { en: 'Projects',  th: 'โปรเจค' },
  skills:     { en: 'Skills',    th: 'ทักษะ' },
  languages:  { en: 'Languages', th: 'ภาษา' },
  contract:   { en: '6-Month Contract', th: 'สัญญาจ้าง 6 เดือน' },
  viewGithub: { en: 'View on GitHub', th: 'ดูบน GitHub' },
  resume:     { en: 'Resume',    th: 'เรซูเม่' },
  honors:     { en: 'Second Class Honors', th: 'เกียรตินิยมอันดับ 2' },
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

const experiences = [
  {
    title:   { en: 'IT Support Technician', th: 'IT Support Technician' },
    company: { en: 'Thai Grand Co., Ltd',   th: 'Thai Grand Co., Ltd' },
    period:  { en: 'May 2025 – Oct 2025',   th: 'พ.ค. 2568 – ต.ค. 2568' },
    isContract: true,
    responsibilities: [
      {
        en: 'Migrated operating systems from Windows 10 to Windows 11 and configured the environment to maintain a familiar user experience',
        th: 'เปลี่ยนระบบปฏิบัติการจาก Windows 10 ไป Windows 11 และตั้งค่า Environment ให้ User ใช้งานได้คล้ายเดิมที่สุด',
      },
      {
        en: 'Provided on-site consultation and troubleshooting, including software configuration',
        th: 'ให้คำปรึกษา และหาทางแก้ปัญหาที่เจอ ณ สถานที่ปฏิบัติงาน เช่น การ config software',
      },
      {
        en: 'Performed hardware upgrades on desktop computers and laptops to improve overall performance',
        th: 'ดำเนินการอัปเกรดฮาร์ดแวร์บนคอมพิวเตอร์ตั้งโต๊ะและแล็ปท็อปเพื่อเพิ่มประสิทธิภาพการทำงาน',
      },
    ],
  },
  {
    title:   { en: 'Sales Executive', th: 'Sales Executive' },
    company: { en: 'Zodiad Ad. Co., Ltd', th: 'Zodiad Ad. Co., Ltd' },
    period:  { en: 'Nov 2021 – Feb 2022', th: 'พ.ย. 2564 – ก.พ. 2565' },
    isContract: false,
    responsibilities: [
      {
        en: 'Acquired new clients through direct outbound calls',
        th: 'หาลูกค้าใหม่ผ่านการโทรติดต่อโดยตรง',
      },
      {
        en: 'Maintained relationships with existing clients to ensure satisfaction and retention',
        th: 'รักษาความสัมพันธ์กับลูกค้าปัจจุบันเพื่อให้มั่นใจว่าลูกค้าพึงพอใจ',
      },
      {
        en: 'Collaborated with the technical team to define and tailor solution scopes for each client',
        th: 'ทำงานร่วมกับทีมเทคนิคเพื่อกำหนดขอบเขตโซลูชันที่ปรับแต่งให้เหมาะสมสำหรับลูกค้า',
      },
      {
        en: 'Managed time effectively and planned structured client outreach schedules',
        th: 'จัดสรรเวลา และวางแผนการติดต่อกับลูกค้า',
      },
    ],
  },
  {
    title:   { en: 'Customer Service Intern', th: 'Customer Service Intern' },
    company: { en: 'Big C Supercenter', th: 'Big C Supercenter' },
    period:  { en: 'Jun 2020 – Aug 2020', th: 'มิ.ย. 2563 – ส.ค. 2563' },
    isContract: false,
    responsibilities: [
      {
        en: 'Assisted customers by answering inquiries and resolving complaints',
        th: 'ให้ความช่วยเหลือลูกค้าในการตอบคำถามและแก้ไขข้อร้องเรียน',
      },
      {
        en: 'Collaborated with staff across departments to enhance service efficiency',
        th: 'ทำงานร่วมกับเจ้าหน้าที่ในแผนกต่างๆ เพื่อเพิ่มประสิทธิภาพการให้บริการ',
      },
    ],
  },
]

const projects = [
  {
    title: 'Dashboard Website',
    tech:  'Next.js',
    description: {
      en: 'A web application built with Next.js to monitor and track the performance metrics of small businesses.',
      th: 'เว็บไซต์ที่พัฒนาด้วย Next.js เพื่อติดตามผลการดำเนินงานของธุรกิจขนาดเล็ก',
    },
    image:  '/assets/Dashboard_website_photo.webp',
    github: 'https://github.com/Supachok-y/shop_dashboard_web',
  },
  {
    title: 'MoneyTrack',
    tech:  'React Native (Android)',
    description: {
      en: 'An Android application built with React Native for tracking personal finances via SMS, designed specifically for elderly users.',
      th: 'แอปพลิเคชัน Android สำหรับการติดตามการเงินผ่าน SMS สำหรับผู้สูงอายุ',
    },
    image:  '/assets/money_track_photo.png',
    github: 'https://github.com/Supachok-y/MoneyTrack',
  },
]

const skills = {
  'Languages':             ['JavaScript', 'TypeScript (Beginner)', 'Java (Beginner)', 'SQL', 'PostgreSQL', 'HTML', 'CSS'],
  'Frameworks & Libraries':['React', 'React Native', 'Next.js', 'TailwindCSS', 'Express', 'Prisma', 'Zod', 'JWT'],
  'Tools':                 ['VSCode', 'Git', 'DBeaver', 'Android Studio', 'Claude Code', 'Postman', 'Vercel'],
}

const skillsLabel = {
  'Languages':              { en: 'Languages',              th: 'ภาษาโปรแกรม' },
  'Frameworks & Libraries': { en: 'Frameworks & Libraries', th: 'Frameworks & Libraries' },
  'Tools':                  { en: 'Tools',                  th: 'Tools' },
}

const langs = [
  {
    name:    { en: 'Thai',    th: 'ภาษาไทย' },
    reading: { en: 'Native',  th: 'Native' },
    speaking:{ en: 'Native',  th: 'Native' },
  },
  {
    name:    { en: 'English', th: 'ภาษาอังกฤษ' },
    reading: { en: 'Intermediate', th: 'Intermediate' },
    speaking:{ en: 'Elementary',   th: 'Elementary' },
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.17 6.17l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

// ── Shared components ─────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
      {children}
    </p>
  )
}

function Divider() {
  return <hr className="border-slate-100 my-10" />
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState('en')
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="relative flex flex-col sm:flex-row gap-8 items-start mb-12">

          {/* Language toggle */}
          <div className="absolute top-0 right-0 flex items-center border border-slate-200 rounded-md overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('th')}
              className={`px-3 py-1.5 transition-colors ${lang === 'th' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              TH
            </button>
          </div>

          <img
            src="/assets/user_photo.JPEG"
            alt="Supachok Yotphet"
            className="w-28 h-28 rounded-full object-cover object-top flex-shrink-0 shadow-sm ring-1 ring-slate-200"
          />

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">
              {lang === 'en' ? 'Supachok Yotphet' : 'ศุภโชค ยอดเพ็ชร'}
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {lang === 'en' ? 'ศุภโชค ยอดเพ็ชร' : 'Supachok Yotphet'}
              &nbsp;·&nbsp;
              {lang === 'en' ? 'Kong' : 'ก้อง'}
            </p>
            <p className="text-slate-500 text-sm mt-1">
              {lang === 'en' ? 'Bangkok / Bang Bon' : 'กรุงเทพ / บางบอน'}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex gap-4 text-slate-400">
                <a href={`mailto:${EMAIL}`} className="hover:text-blue-600 transition-colors" title={EMAIL}>
                  <IconEmail />
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors" title="GitHub">
                  <IconGitHub />
                </a>
                <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hover:text-blue-600 transition-colors" title={PHONE}>
                  <IconPhone />
                </a>
              </div>
              <a
                href="/assets/Resume_th.pdf"
                download="Resume_Supachok_Yotphet.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 border border-slate-300 hover:border-slate-400 hover:text-slate-800 px-3 py-1.5 rounded-md transition-colors"
              >
                <IconDownload />
                {t(ui.resume)}
              </a>
            </div>
          </div>
        </div>

        <Divider />

        {/* Education */}
        <section>
          <SectionLabel>{t(ui.education)}</SectionLabel>
          <div>
            <p className="font-medium text-slate-800">{t(education.institution)}</p>
            <p className="text-slate-600 text-sm mt-0.5">{t(education.degree)}</p>
            <p className="text-slate-500 text-sm mt-0.5">
              {t(ui.honors)} &nbsp;·&nbsp; GPA 3.56 &nbsp;·&nbsp; 2023
            </p>
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section>
          <SectionLabel>{t(ui.experience)}</SectionLabel>
          <div className="space-y-9">
            {experiences.map((exp) => (
              <div key={exp.title.en}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2.5">
                  <div>
                    <span className="font-medium text-slate-800">{t(exp.title)}</span>
                    <span className="text-slate-300 mx-2">·</span>
                    <span className="text-slate-500 text-sm">{t(exp.company)}</span>
                    {exp.isContract && (
                      <span className="ml-2 text-xs text-slate-400">({t(ui.contract)})</span>
                    )}
                  </div>
                  <span className="text-slate-400 text-sm whitespace-nowrap">{t(exp.period)}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-slate-100">
                      {t(r)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section>
          <SectionLabel>{t(ui.projects)}</SectionLabel>
          <div className="space-y-10">
            {projects.map((proj) => (
              <div key={proj.title}>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-slate-200 hover:border-slate-300 transition-colors mb-3"
                >
                  <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover object-top" />
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

        <Divider />

        {/* Skills */}
        <section>
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

        <Divider />

        {/* Languages */}
        <section>
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

        <Divider />

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm space-y-1">
          <p>
            <a href={`mailto:${EMAIL}`} className="hover:text-slate-600 transition-colors">{EMAIL}</a>
            &nbsp;·&nbsp;
            <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hover:text-slate-600 transition-colors">{PHONE}</a>
          </p>
          <p>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">
              github.com/Supachok-y
            </a>
          </p>
        </footer>

      </main>
    </div>
  )
}
