import { SectionLabel } from '../ui/Shared'

const ui = {
  experience: { en: 'Experience', th: 'ประสบการณ์ทำงาน' },
  contract:   { en: '6-Month Contract', th: 'สัญญาจ้าง 6 เดือน' },
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

export default function Experience({ lang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <section className="p-6 mb-4">
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
  )
}
