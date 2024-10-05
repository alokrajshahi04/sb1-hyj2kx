import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">MarketingAI</span>
            </div>
            <p className="text-gray-400">Empowering small businesses with AI-driven marketing solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 MarketingAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer