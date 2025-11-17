import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Monthly active users', starter: '1k', pro: '25k', scale: 'Custom' },
  { feature: 'Email OTP', starter: true, pro: true, scale: true },
  { feature: 'Passkeys (WebAuthn)', starter: false, pro: true, scale: true },
  { feature: 'MFA (TOTP/SMS)', starter: false, pro: true, scale: true },
  { feature: 'Organizations & roles', starter: 'Basic', pro: 'Advanced', scale: 'Enterprise' },
  { feature: 'SAML/SSO', starter: false, pro: false, scale: true },
  { feature: 'Audit logs', starter: false, pro: true, scale: true },
  { feature: 'Support', starter: 'Community', pro: 'Priority', scale: 'Dedicated' },
]

export default function Compare(){
  const Cell = ({ value }) => {
    if (value === true) return <Check className="h-5 w-5 text-emerald-600 mx-auto" />
    if (value === false) return <X className="h-5 w-5 text-slate-300 mx-auto" />
    return <span className="text-sm text-slate-700">{value}</span>
  }

  return (
    <section className="py-24" id="compare">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Compare plans</h2>
          <p className="mt-3 text-slate-600">Choose the plan that fits your security and scale needs.</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-4 gap-0 border-b border-slate-200">
            <div className="p-4 text-sm font-medium text-slate-500">Feature</div>
            <div className="p-4 text-center font-semibold">Starter</div>
            <div className="p-4 text-center font-semibold">Pro</div>
            <div className="p-4 text-center font-semibold">Scale</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.feature} className={`grid grid-cols-4 gap-0 ${i !== rows.length-1 ? 'border-b border-slate-100' : ''}`}>
              <div className="p-4 text-sm text-slate-700">{r.feature}</div>
              <div className="p-4 text-center"><Cell value={r.starter} /></div>
              <div className="p-4 text-center"><Cell value={r.pro} /></div>
              <div className="p-4 text-center"><Cell value={r.scale} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
