import React from 'react'

export default function TestimonialHero() {
  return (
    <section className="testimonial-hero">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-quote">
            <h2>We Made A Chicago Liquor Store <span className="highlight">+$700,000</span> in 2024</h2>
          </div>
          <blockquote>
            "We are up $700,000 in 2024 - I couldn't be happier with Alden's team for making it happen."
          </blockquote>
          <div className="testimonial-author">
            <div className="author-info">
              <span className="author-name">Pete</span>
              <span className="author-title">Store Owner, Retail Liquor Store</span>
              <span className="author-location">Chicago, IL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
