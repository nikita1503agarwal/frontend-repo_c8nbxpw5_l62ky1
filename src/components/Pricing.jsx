import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 'Free', period: '', features: ['1,000 monthly active users', 'Email OTP', 'Community support'], cta: 'Start free', highlighted: false },
  { name: 'Pro', price: '$49', period: '/mo', features: ['25,000 MAU', 'Passkeys + MFA', 'Role-based access'], cta: 'Get Pro', highlighted: true },
  { name: 'Scale', price: 'Contact', period: 'sales', features: ['SAML/SSO', 'Audit logs', 'Dedicated support'], cta: 'Talk to sales', highlighted: false },
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free, scale when you need it. No surprises.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className={`rounded-2xl border ${p.highlighted ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'} bg-white p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <div className="text-3xl font-extrabold">
                  <span>{p.price}</span>
                  <span className="text-base font-medium text-slate-500 ml-1">{p.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-slate-600"><Check className="h-4 w-4 text-emerald-600 mt-0.5"/> {f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#cta" className={`w-full inline-flex justify-center rounded-lg px-4 py-2 ${p.highlighted ? 'bg-slate-900 text-white' : 'border border-slate-300'} hover:opacity-90 transition`}>{p.cta}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
