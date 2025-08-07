import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { Button, Input, Card, GlowingCard, AnimatedText, ParticleBackground } from './ui'
import { useIntersectionObserver } from '../hooks'
import { fadeInUp, stagger } from '../utils/animations'

const ModernContact = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Business Ave, Tech District\nSan Francisco, CA 94105",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567\nMon-Fri 9AM-6PM PST",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@crmproto.com\nsupport@crmproto.com",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section 
      ref={elementRef}
      id="contact" 
      className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden"
    >
      <ParticleBackground variant="network" />
      
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30">
              🚀 Ready to Transform?
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <AnimatedText 
              text="Let's Build Your" 
              className="block text-white"
            />
            <AnimatedText 
              text="Success Story" 
              delay={0.3}
              className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent block"
            />
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join thousands of businesses that trust CRM Pro to manage their customer relationships 
            and accelerate growth. Your success story starts here.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <GlowingCard
              className="relative"
              glowColor="rgba(59, 130, 246, 0.3)"
              intensity="high"
              animate3D={true}
            >
              <Card padding="xl" className="bg-white/10 backdrop-blur-md border border-white/20">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-gray-300">
                    Fill out the form below and our team will get back to you within 24 hours 
                    to discuss your CRM needs and create a custom solution.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for your interest. We'll be in touch soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        required
                        animate
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                      />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        animate
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>

                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name (Optional)"
                      animate
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                    />

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your CRM needs and goals..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                      />
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
                      rightIcon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </Card>
            </GlowingCard>
          </motion.div>

          {/* Contact Information & CTA */}
          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Start Your Free Trial
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: <Clock className="w-6 h-6" />, text: "Setup in under 5 minutes" },
                    { icon: <CheckCircle className="w-6 h-6" />, text: "No credit card required" },
                    { icon: <Phone className="w-6 h-6" />, text: "24/7 dedicated support" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <Button
                    fullWidth
                    size="xl"
                    className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
                  >
                    Start Free 14-Day Trial
                  </Button>
                  <Button
                    fullWidth
                    variant="outline"
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Schedule Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                >
                  <GlowingCard
                    glowColor="rgba(255, 255, 255, 0.1)"
                    intensity="low"
                  >
                    <Card padding="lg" className="bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                          <p className="text-gray-300 text-sm whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    </Card>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernContact