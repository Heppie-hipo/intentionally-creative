import React from 'react'

export default function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <div className="section-header">
          <h2>Are You Currently Struggling With...</h2>
          <p>These are the top challenges every liquor store owner faces</p>
        </div>
        <div className="problems-grid">
          <div className="problem-card scroll-reveal">
            <div className="problem-icon">
              <i className="fas fa-users-slash"></i>
            </div>
            <h3>Not Enough Customers?</h3>
            <p>Without a targeted marketing strategy, you're missing shoppers every day that go to your competitors instead of you.</p>
          </div>
          <div className="problem-card scroll-reveal">
            <div className="problem-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>No Time or Staff to Execute?</h3>
            <p>Managing inventory, staff, and operations doesn't leave room for marketing. Without focus, your store falls behind.</p>
          </div>
          <div className="problem-card scroll-reveal">
            <div className="problem-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3>Unsure Which Tactics Work?</h3>
            <p>Social media, paid ads, email campaigns? It's tough to know where to begin without wasting time and money.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
