export function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
      {children}
    </p>
  )
}

export function Divider() {
  return <hr className="border-slate-100 my-10" />
}
