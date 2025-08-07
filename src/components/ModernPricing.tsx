import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { Button, Card, GlowingCard, AnimatedText } from './ui'
import { useIntersectionObserver, useToggle } from '../hooks'
import { fadeInUp, stagger } from '../utils/animations'

const ModernPricing = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [isAnnual, toggleBilling] = useToggle(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      icon: <Star className="w-6 h-6" />,
      features: [
        "Up to 5 users",
        "1,000 contacts",
        "Basic CRM features",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "2GB storage"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 59,
      annualPrice: 49,
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Up to 25 users",
        "10,000 contacts",
        "Advanced CRM features",
        "Priority support",
        "Custom fields & workflows",
        "Advanced analytics",
        "Email integration",
        "Automation rules",
        "API access",
        "10GB storage"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      description: "For large teams with advanced needs",
      monthlyPrice: 99,
      annualPrice: 79,
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited users",
        "Unlimited contacts",
        "All CRM features",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced AI insights",
        "White-label options",
        "SSO & advanced security",
        "Dedicated account manager",
        "Unlimited storage"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section 
      ref={elementRef}
      id="pricing" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium">
              💎 Transparent Pricing
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            <AnimatedText 
              text="Choose Your" 
              className="block"
            />
            <AnimatedText 
              text="Success Plan" 
              delay={0.3}
              className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent block"
            />
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Start free, scale as you grow. All plans include our core features with 
            no setup fees and the flexibility to change anytime.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="inline-flex bg-white rounded-xl p-1 shadow-lg border border-gray-200"
          >
            <button
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => toggleBilling(false)}
            >
              Monthly
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => toggleBilling(true)}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <GlowingCard
                className={`relative h-full ${plan.popular ? 'transform scale-105' : ''}`}
                intensity={plan.popular ? 'high' : 'medium'}
                glowColor={plan.popular ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.2)'}
                animate3D={true}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card padding="xl" className="h-full border-0 bg-white/90 backdrop-blur-sm">
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-8">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white mx-auto mb-4`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}
                      >
                        {plan.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-gray-900">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-600 ml-2">/month</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-accent-600 mt-2">
                            Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                          </div>
                        )}
                        <p className="text-sm text-gray-500 mt-1">per user</p>
                      </div>

                      <Button
                        fullWidth
                        variant={plan.popular ? 'primary' : 'outline'}
                        size="lg"
                        className={plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}
                      >
                        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                      </Button>
                    </div>

                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: 0.1 * featureIndex }}
                          >
                            <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block max-w-4xl">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              {[
                { icon: "🎯", text: "14-day free trial" },
                { icon: "💳", text: "No credit card required" },
                { icon: "🔒", text: "Cancel anytime" },
                { icon: "📞", text: "24/7 support" },
                { icon: "🚀", text: "Instant setup" },
                { icon: "💰", text: "Money-back guarantee" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </section>
  )
}

export default ModernPricing