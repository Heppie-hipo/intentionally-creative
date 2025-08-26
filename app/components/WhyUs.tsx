import React from 'react'

export default function WhyUs() {
  return (
    <section className="why-us" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Why Work With Us?</h2>
          <p>We're not just another marketing agency - we're liquor store specialists</p>
        </div>
        <div className="features-grid">
          <div className="feature-card scroll-reveal">
            <div className="feature-icon">
              <i className="fas fa-wine-bottle"></i>
            </div>
            <h3>We Understand Liquor Stores</h3>
            <p>10+ years working with producers, distributors and retailers. We've grown stores just like yours, big and small.</p>
          </div>
          <div className="feature-card scroll-reveal">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>KPIs & Results First</h3>
            <p>Know where your money is going. Gain an unfair advantage with our proprietary retail liquor store insights.</p>
          </div>
          <div className="feature-card scroll-reveal">
            <div className="feature-icon">
              <i className="fas fa-magic"></i>
            </div>
            <h3>World-Class Team, 100% DFY</h3>
            <p>Our entire team works ONLY on liquor stores: graphics, ads, copywriting, SEO, City Hive fulfillment. All done for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
