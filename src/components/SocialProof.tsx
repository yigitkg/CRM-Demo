const SocialProof = () => {
  const testimonials = [
    {
      quote: "CRM Pro transformed how we manage our sales pipeline. We've seen a 45% increase in conversion rates since implementing it.",
      author: "Sarah Johnson",
      position: "Sales Director",
      company: "TechFlow Inc.",
      avatar: "SJ"
    },
    {
      quote: "The automation features saved us 20+ hours per week. Now we can focus on building relationships instead of administrative tasks.",
      author: "Michael Chen",
      position: "VP of Sales",
      company: "Growth Labs",
      avatar: "MC"
    },
    {
      quote: "Best investment we've made for our sales team. The insights and analytics help us make data-driven decisions every day.",
      author: "Emily Rodriguez",
      position: "CEO",
      company: "Innovate Co.",
      avatar: "ER"
    }
  ]

  const companies = [
    "TechFlow",
    "Growth Labs", 
    "Innovate Co.",
    "DataStream",
    "CloudTech",
    "NextGen"
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their sales process with CRM Pro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-12">
          <p className="text-center text-gray-500 mb-8">Trusted by 10,000+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-accent-50 text-accent-700 px-6 py-3 rounded-full font-medium">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            4.9/5 rating from 2,500+ reviews
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof