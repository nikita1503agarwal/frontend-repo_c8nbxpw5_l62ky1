import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Compare from '../components/Compare'

export default function PricingPage(){
  return (
    <div className="bg-white text-slate-900">
      <Topbar />
      <main className="pt-16">
        <Pricing />
        <Compare />
      </main>
      <Footer />
    </div>
  )
}
