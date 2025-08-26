'use client'

import React, { useEffect } from 'react'

export default function Results() {
  useEffect(() => {
    const animateCharts = () => {
      const chartBars = document.querySelectorAll('.chart-bar')
      
      chartBars.forEach((bar, index) => {
        setTimeout(() => {
          const barElement = bar as HTMLElement
          const value = barElement.dataset.value
          if (value) {
            barElement.style.setProperty('--width', value + '%')
          }
        }, index * 200)
      })
    }

    const resultsSection = document.getElementById('results')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCharts()
          observer.unobserve(entry.target)
        }
      })
    })
    
    if (resultsSection) {
      observer.observe(resultsSection)
    }

    return () => {
      if (resultsSection) {
        observer.unobserve(resultsSection)
      }
    }
  }, [])

  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-header">
          <h2>Real Results for Clients</h2>
          <p>These are the average results our merchants see in 3-4 months</p>
        </div>
        <div className="results-showcase">
          <div className="results-chart">
            <h3>Website SEO Performance</h3>
            <div className="chart-container">
              <div className="chart-bar" data-value="85">
                <span className="bar-label">Organic Traffic</span>
                <span className="bar-value">+185%</span>
              </div>
              <div className="chart-bar" data-value="70">
                <span className="bar-label">Local Rankings</span>
                <span className="bar-value">+170%</span>
              </div>
              <div className="chart-bar" data-value="90">
                <span className="bar-label">Conversion Rate</span>
                <span className="bar-value">+190%</span>
              </div>
              <div className="chart-bar" data-value="65">
                <span className="bar-label">Page Speed</span>
                <span className="bar-value">+165%</span>
              </div>
            </div>
          </div>
          <div className="results-text">
            <h4>We've cracked the code on SEO in the retail liquor store niche</h4>
            <p>A primary benefit to working with a niche-specific agency is our deep understanding of what works in your industry.</p>
            <ul>
              <li>✓ Outrank national chains locally</li>
              <li>✓ Dominate "near me" searches</li>
              <li>✓ Capture high-intent shoppers</li>
              <li>✓ Build long-term organic growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
