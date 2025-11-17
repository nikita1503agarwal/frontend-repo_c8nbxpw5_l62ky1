import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ErrorBoundary({ children, fallback }) {
  const [error, setError] = useState(null)
  return (
    <Boundary onError={setError} fallback={fallback}>
      {error ? fallback : children}
    </Boundary>
  )
}

function Boundary({ children, onError, fallback }) {
  try {
    return children
  } catch (e) {
    onError?.(e)
    return fallback
  }
}

export default function Hero(){
  const [canRender3D, setCanRender3D] = useState(false)
  const [SplineComp, setSplineComp] = useState(null)

  useEffect(() => {
    // Only attempt to load Spline on the client and when browser likely supports WebGL
    const hasWindow = typeof window !== 'undefined'
    const hasDoc = typeof document !== 'undefined'
    const supportsWebGL = (() => {
      try {
        const canvas = document.createElement('canvas')
        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      } catch {
        return false
      }
    })()

    if (hasWindow && hasDoc && supportsWebGL) {
      import('@splinetool/react-spline')
        .then(mod => {
          setSplineComp(() => mod.default)
          setCanRender3D(true)
        })
        .catch(() => {
          setCanRender3D(false)
        })
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      <div className="absolute inset-0">
        {canRender3D && SplineComp ? (
          <ErrorBoundary fallback={<div className=\"w-full h-full bg-gradient-to-br from-indigo-100 via-white to-blue-100\"/>}>
            <SplineComp scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </ErrorBoundary>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-white to-blue-100"/>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 mb-4 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live in production
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Authentication that just works.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            W:/Auth is a secure, developer-first authentication platform with elegant SDKs and enterprise-grade controls.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-lg bg-slate-900 text-white px-5 py-3 hover:opacity-90 transition">View pricing</a>
            <a href="#sdk" className="rounded-lg border border-slate-300 bg-white px-5 py-3 hover:bg-slate-50 transition">Explore SDK</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
