import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="section-container">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-primary-600 text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CRM Pro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Primary">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Sign In
            </button>
            <button className="btn-primary">
              Start Free Trial
            </button>
          </div>

          <button
            className="md:hidden p-2"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
              <div className="pt-4 border-t">
                <button className="w-full btn-primary">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header