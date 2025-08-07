import Header from './components/Header'
import ModernHero from './components/ModernHero'
import ModernFeatures from './components/ModernFeatures'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import ModernPricing from './components/ModernPricing'
import ModernContact from './components/ModernContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <ModernHero />
        <ModernFeatures />
        <Benefits />
        <SocialProof />
        <ModernPricing />
        <ModernContact />
      </main>
      <Footer />
    </div>
  )
}

export default App