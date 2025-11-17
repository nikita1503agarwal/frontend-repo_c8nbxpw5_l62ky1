import { motion } from 'framer-motion'
import { ShieldCheck, KeyRound, Fingerprint, GlobeLock } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Zero-trust by default', desc: 'Granular policies, device posture, and context-aware sessions.' },
  { icon: KeyRound, title: 'Multi-tenant ready', desc: 'Built-in orgs, roles, and permissions for B2B SaaS.' },
  { icon: Fingerprint, title: 'Passkeys + MFA', desc: 'WebAuthn passkeys, TOTP, SMS/Email codes — all in one.' },
  { icon: GlobeLock, title: 'Global edge', desc: 'Low-latency auth across regions with automatic failover.' },
]

export default function Offer(){
  return (
    <section id="offer" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we offer</h2>
          <p className="mt-3 text-slate-600">Everything you need to launch secure auth — and nothing you don’t.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{delay:i*0.05}} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center">
                <f.icon />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
