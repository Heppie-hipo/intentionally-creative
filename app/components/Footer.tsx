import React from 'react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Intentionally Creative</h3>
            <p>Liquor Store Marketing Experts</p>
          </div>
          <div className="footer-links">
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('services')
              }}
            >
              Services
            </a>
            <a 
              href="#process"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('process')
              }}
            >
              Process
            </a>
            <a 
              href="#results"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('results')
              }}
            >
              Results
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Intentionally Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
