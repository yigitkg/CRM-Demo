const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "1,000 contacts",
        "Basic CRM features",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "59",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "10,000 contacts",
        "Advanced CRM features",
        "Priority support",
        "Custom fields",
        "Advanced reporting",
        "Email integration",
        "Automation workflows"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For large teams with advanced needs",
      features: [
        "Unlimited users",
        "Unlimited contacts",
        "All CRM features",
        "24/7 phone support",
        "Custom integrations",
        "Advanced analytics",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 gradient-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-primary-600 block">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button className="px-6 py-2 bg-primary-600 text-white rounded-md font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-600 font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="bg-primary-600 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">per user</p>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${
                  plan.popular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 inline-block shadow-md">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing