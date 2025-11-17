export default function Footer(){
  return (
    <footer id="cta" className="py-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">Ready to ship auth faster?</h3>
            <p className="text-slate-600 mt-1">Start free. Upgrade when you grow.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="rounded-lg bg-slate-900 text-white px-5 py-3 hover:opacity-90 transition">Create account</a>
            <a href="#pricing" className="rounded-lg border border-slate-300 bg-white px-5 py-3 hover:bg-slate-50 transition">See pricing</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} W:/Auth. All rights reserved.</p>
      </div>
    </footer>
  )
}
