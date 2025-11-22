import { motion } from 'framer-motion'
import { ChevronRight, Play, Sparkles } from 'lucide-react'
import { Button, ParticleBackground, AnimatedText, GlowingCard } from './ui'
import { useIntersectionObserver } from '../hooks'
import { useBreakpoint } from '../hooks'
import { fadeInUp, stagger } from '../utils/animations'

const ModernHero = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 })
  const { isDesktop } = useBreakpoint()

  return (
    <section 
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      {isDesktop && <ParticleBackground variant="cosmic" />}
      
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              <AnimatedText text="✨ AI-Powered CRM Platform" variant="fadeIn" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            <AnimatedText 
              text="Transform Your Business" 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
            />
            <br />
            <AnimatedText 
              text="with Intelligent CRM" 
              delay={0.5}
              className="text-gray-900"
            />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Harness the power of AI to streamline your sales process, manage customer relationships, 
            and accelerate growth with our next-generation CRM platform.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button
              size="xl"
              className="group relative overflow-hidden"
              rightIcon={
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              }
            >
              <span className="relative z-10">Start Free 14-Day Trial</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              />
            </Button>

            <Button
              variant="ghost"
              size="xl"
              className="group border-2 border-gray-200 hover:border-primary-200"
              leftIcon={<Play className="w-5 h-5 transition-transform group-hover:scale-110" />}
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-16"
          >
            {[
              { icon: "✅", text: "No credit card required" },
              { icon: "⚡", text: "Setup in 2 minutes" },
              { icon: "🔒", text: "Enterprise-grade security" },
              { icon: "🎯", text: "Cancel anytime" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <GlowingCard
              className="p-2 bg-white rounded-2xl shadow-2xl"
              animate3D={true}
              intensity="high"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 60px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <motion.svg 
                      className="w-16 h-16 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI-Powered Dashboard</h3>
                  <p className="text-gray-600">Experience intelligent insights at your fingertips</p>
                </div>

                {/* Floating elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary-400 rounded-full"
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${30 + (i % 2) * 40}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernHero