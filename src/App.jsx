import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Offer from './components/Offer'
import SDK from './components/SDK'
import Logos from './components/Logos'
import Pricing from './components/Pricing'
import Compare from './components/Compare'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Topbar />
      <main className="pt-16">
        <Hero />
        <Offer />
        <SDK />
        <Logos />
        <Pricing />
        <Compare />
      </main>
      <Footer />
    </div>
  )
}

export default App