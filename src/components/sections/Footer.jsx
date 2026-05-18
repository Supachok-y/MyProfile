const EMAIL = 'supachok.yotphet@gmail.com'
const PHONE = '062-357-5698'
const GITHUB = 'https://github.com/Supachok-y'

export default function Footer() {
  return (
    <footer className="p-6 mb-4 text-center text-slate-400 text-sm space-y-1">
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
  )
}
