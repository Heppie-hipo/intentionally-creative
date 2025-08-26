import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <h3>Alden Morris | Founder</h3>
            <p>With more than 10 years of dedicated experience in the three tiers of US beverage, Alden leads a team of seasoned professionals known for their deep knowledge and proven results.</p>
            <p>Our staff comprises senior-level specialists in branding, graphic design, copywriting, SEO, and production management. This combination ensures our clients receive top-tier service and innovative strategies.</p>
            <div className="team-expertise">
              <div className="expertise-item">
                <i className="fas fa-palette"></i>
                <span>Branding & Design</span>
              </div>
              <div className="expertise-item">
                <i className="fas fa-pen-fancy"></i>
                <span>Copywriting</span>
              </div>
              <div className="expertise-item">
                <i className="fas fa-search"></i>
                <span>SEO Optimization</span>
              </div>
              <div className="expertise-item">
                <i className="fas fa-cogs"></i>
                <span>Production Management</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="team-photo-placeholder">
              <i className="fas fa-users"></i>
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
