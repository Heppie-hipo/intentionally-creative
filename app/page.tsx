'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problems from './components/Problems'
import TestimonialHero from './components/TestimonialHero'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Services from './components/Services'
import Results from './components/Results'
import About from './components/About'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Scroll reveal functionality
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal')
      
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed')
        }
      })
    }

    // Navbar background on scroll
    const handleNavbarScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(26, 26, 46, 0.98)'
        } else {
          navbar.style.background = 'rgba(26, 26, 46, 0.95)'
        }
      }
    }

    // Debounce scroll events
    const debounce = (func: Function, wait: number) => {
      let timeout: NodeJS.Timeout
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }

    const debouncedScrollHandler = debounce(() => {
      revealOnScroll()
      handleNavbarScroll()
    }, 10)

    window.addEventListener('scroll', debouncedScrollHandler)
    
    // Initial reveal check
    revealOnScroll()

    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler)
    }
  }, [])

  return (
    <main className={isLoaded ? 'loaded' : ''}>
      <Navigation />
      <Hero />
      <Problems />
      <TestimonialHero />
      <WhyUs />
      <Process />
      <Services />
      <Results />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
