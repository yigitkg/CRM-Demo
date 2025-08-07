import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Mail, 
  Zap, 
  Smartphone,
  Brain,
  Shield,
  Globe
} from 'lucide-react'
import { Card, AnimatedText, GlowingCard } from './ui'
import { useIntersectionObserver } from '../hooks'
import { fadeInUp, stagger } from '../utils/animations'

const ModernFeatures = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Contact Management",
      description: "AI-powered contact organization with intelligent tagging, duplicate detection, and relationship mapping.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Intelligent Sales Pipeline",
      description: "Predictive analytics and automated stage progression to maximize your conversion rates.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time insights with machine learning-powered forecasting and performance optimization.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Assistant",
      description: "Your personal CRM assistant that learns from your behavior and suggests optimal actions.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Unified Communications",
      description: "Seamless email, SMS, and call integration with AI-powered conversation insights.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Intelligent automation that adapts to your business processes and eliminates repetitive tasks.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Native mobile experience with offline capability and real-time synchronization.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications.",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Integration",
      description: "Connect with 500+ apps and services through our robust API and integration platform.",
      gradient: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <section 
      ref={elementRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              🚀 Next-Generation Features
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            <AnimatedText 
              text="Everything You Need to" 
              className="block"
            />
            <AnimatedText 
              text="Dominate Your Market" 
              delay={0.3}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block"
            />
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the future of customer relationship management with AI-powered insights, 
            seamless integrations, and intelligent automation.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <GlowingCard
                className="h-full group cursor-pointer"
                animate3D={true}
                intensity="medium"
                glowColor="rgba(59, 130, 246, 0.2)"
              >
                <Card padding="lg" className="h-full border-0 bg-white/80 backdrop-blur-sm">
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ 
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                        y: -5 
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    <motion.div
                      className="mt-6 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </Card>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.button
            className="btn-primary text-lg px-12 py-4 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Features</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-700 via-secondary-600 to-primary-700 opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
    </section>
  )
}

export default ModernFeatures