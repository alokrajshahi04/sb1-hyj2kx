import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Revolutionize Your Marketing with AI</h1>
          <p className="text-xl mb-8">Empower your small business with our all-in-one AI-driven marketing solution. Create, customize, and publish content across platforms effortlessly.</p>
          <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300 text-lg">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80" alt="Marketing Dashboard" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Hero