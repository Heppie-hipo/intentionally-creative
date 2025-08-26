'use client'

import React from 'react'

export default function CTA() {
  const bookCall = () => {
    alert('Booking system would open here. In production, this would integrate with Calendly, Acuity, or similar booking platform.')
  }

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Liquor Store?</h2>
          <p>Join successful store owners who've increased their revenue by $700,000+ with our proven system.</p>
          <button className="btn-primary large" onClick={bookCall}>
            <i className="fas fa-calendar-alt"></i>
            Book Your Free Strategy Call
          </button>
          <div className="cta-guarantee">
            <i className="fas fa-shield-alt"></i>
            <span>100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
