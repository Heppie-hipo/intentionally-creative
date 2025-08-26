import React from 'react'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2>Our Process</h2>
          <p>100% customized to every store, with 100% reliable results</p>
        </div>
        <div className="process-timeline">
          <div className="process-step scroll-reveal">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Audit & Strategy Development</h3>
              <p>We analyze your store's sales data, seasonal trends, and bestsellers, then combine it with our database of successful liquor stores nationwide.</p>
            </div>
          </div>
          <div className="process-step scroll-reveal">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Industry-Proven Implementation</h3>
              <p>We build a completely tailored plan for your store. Whether barrel picks, local favorites, or trending products - you'll stay ahead of competition.</p>
            </div>
          </div>
          <div className="process-step scroll-reveal">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Analysis & Optimization</h3>
              <p>100% done for you! We handle ads, website edits, Google accounts, geofencing, reporting, and continuously optimize campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
