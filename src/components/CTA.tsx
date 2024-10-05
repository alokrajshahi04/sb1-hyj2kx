import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Marketing?</h2>
        <p className="text-xl mb-8">Join thousands of businesses already using MarketingAI to boost their online presence.</p>
        <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300 text-lg">
          Start Your Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

export default CTA