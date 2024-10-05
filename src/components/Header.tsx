import React, { useState } from 'react'
import { Zap, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import AuthModal from './AuthModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user] = useAuthState(auth)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const openAuthModal = (signUp: boolean) => {
    setIsSignUp(signUp)
    setIsAuthModalOpen(true)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">MarketingAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            {user ? (
              <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Dashboard</Link>
            ) : (
              <>
                <button onClick={() => openAuthModal(false)} className="text-gray-600 hover:text-blue-600">Log In</button>
                <button onClick={() => openAuthModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
              </>
            )}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-4 py-2">
            <li><a href="#features" className="block py-2 text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a></li>
            {user ? (
              <li><Link to="/dashboard" className="block py-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 mt-2">Dashboard</Link></li>
            ) : (
              <>
                <li><button onClick={() => openAuthModal(false)} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">Log In</button></li>
                <li><button onClick={() => openAuthModal(true)} className="block py-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 mt-2 w-full text-left">Sign Up</button></li>
              </>
            )}
          </ul>
        </div>
      )}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} isSignUp={isSignUp} />
    </header>
  )
}

export default Header