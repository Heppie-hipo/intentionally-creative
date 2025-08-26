'use client'

import React, { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const bookCall = () => {
    // In production, this would integrate with a booking system
    // For now, we'll scroll to the contact section
    scrollToSection('contact')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Intentionally Creative</h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#services" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('services')
            }}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('process')
            }}
          >
            Process
          </a>
          <a 
            href="#results" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('results')
            }}
          >
            Results
          </a>
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
          >
            About
          </a>
          <button 
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault()
              bookCall()
            }}
          >
            Book a Call
          </button>
        </div>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
