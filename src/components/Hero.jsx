import { IconEmail, IconGitHub, IconPhone, IconDownload } from './Icons'

const GITHUB = 'https://github.com/Supachok-y'
const EMAIL = 'supachok.yotphet@gmail.com'
const PHONE = '062-357-5698'

const ui = {
  resume: { en: 'Resume', th: 'เรซูเม่' },
}

export default function Hero({ lang, setLang }) {
  const t = (obj) => obj[lang] ?? obj.en

  return (
    <div className="relative flex flex-col sm:flex-row gap-8 items-start p-6 mb-4">

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
          {lang === 'en' ? 'Nick name :' : 'ชื่อเล่น :'}
          &nbsp; &nbsp;
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
  )
}
