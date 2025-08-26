'use client'

import React from 'react'

export default function Hero() {
  const scrollToResults = () => {
    const element = document.getElementById('results')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  const bookCall = () => {
    alert('Booking system would open here. In production, this would integrate with Calendly, Acuity, or similar booking platform.')
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Industry-Leading Liquor Store Marketing</span>
          </div>
          <h1 className="hero-title">
            Transform Your Liquor Store Into a 
            <span className="gradient-text">Customer Magnet</span>
          </h1>
          <p className="hero-subtitle">
            We'll redesign your website, marketing strategy, and business presence in under 3 weeks, 
            then send 6,000+ local customers to your store in 6 months. Guaranteed.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">$700K+</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Done For You</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn-primary" onClick={bookCall}>
              <i className="fas fa-calendar-alt"></i>
              Book Your Strategy Call
            </button>
            <button className="btn-secondary" onClick={scrollToResults}>
              View Case Studies
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="metric">
                <span className="metric-label">Monthly Revenue</span>
                <span className="metric-value">+$58,333</span>
                <span className="metric-change">↗ +127%</span>
              </div>
              <div className="metric">
                <span className="metric-label">New Customers</span>
                <span className="metric-value">1,247</span>
                <span className="metric-change">↗ +89%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Website Traffic</span>
                <span className="metric-value">12,450</span>
                <span className="metric-change">↗ +156%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
