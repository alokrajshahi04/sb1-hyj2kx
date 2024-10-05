import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    features: ['AI content suggestions', 'Basic design templates', 'Social media scheduling', 'Limited analytics'],
  },
  {
    name: 'Pro',
    price: '$79',
    features: ['Advanced AI assistance', 'Premium design templates', 'Video editing tools', 'Comprehensive analytics', 'SEO optimization'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Full-scale AI marketing suite', 'Custom templates', 'Dedicated account manager', 'Advanced integrations', 'Priority support'],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Affordable Plans for Every Business</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the perfect plan to skyrocket your marketing efforts</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm text-gray-500">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing