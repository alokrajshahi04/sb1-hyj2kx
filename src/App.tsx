import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Results />
                <Testimonials />
                <Pricing />
                <CTA />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App