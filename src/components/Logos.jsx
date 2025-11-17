import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
]

export default function Logos(){
  return (
    <section id="customers" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-medium text-slate-500">Trusted by modern teams</h3>
        <div className="mt-8 overflow-hidden relative">
          <motion.div 
            className="flex items-center gap-12 will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="logo" className="h-8 opacity-60 hover:opacity-100 transition" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
