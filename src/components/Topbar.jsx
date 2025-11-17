import { Link, NavLink } from 'react-router-dom'
import { Menu, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '#offer', label: 'What we offer' },
    { href: '#sdk', label: 'SDK' },
    { href: '#customers', label: 'Customers' },
    { href: '#pricing', label: 'Pricing' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-white/50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white">
              <ShieldCheck size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">W:/Auth</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">{n.label}</a>
            ))}
            <NavLink to="/pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing page</NavLink>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:opacity-90 transition">
              <Sparkles size={16} /> Start free
            </a>
          </nav>
          <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm text-slate-700">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="py-2">{n.label}</a>
            ))}
            <NavLink to="/pricing" onClick={()=>setOpen(false)} className="py-2">Pricing page</NavLink>
            <a href="#cta" onClick={()=>setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2">Start free</a>
          </div>
        )}
      </div>
    </header>
  )
}
