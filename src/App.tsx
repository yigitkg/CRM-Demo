import { Suspense, lazy } from 'react'
import Header from './components/Header'
import ModernHero from './components/ModernHero'
import ModernFeatures from './components/ModernFeatures'
import Footer from './components/Footer'

const Benefits = lazy(() => import('./components/Benefits'))
const SocialProof = lazy(() => import('./components/SocialProof'))
const ModernPricing = lazy(() => import('./components/ModernPricing'))
const ModernContact = lazy(() => import('./components/ModernContact'))

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main id="main-content">
        <ModernHero />
        <ModernFeatures />
        <Suspense fallback={<div className="section-container py-16 text-center text-gray-500">Loading…</div>}>
          <Benefits />
          <SocialProof />
          <ModernPricing />
          <ModernContact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App