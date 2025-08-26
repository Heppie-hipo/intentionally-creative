'use client'

import React, { useState } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState('new-customers')

  const showTab = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>What's Included?</h2>
          <p>Everything you need to grow your business as fast as physically possible</p>
        </div>
        <div className="services-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'new-customers' ? 'active' : ''}`}
              onClick={() => showTab('new-customers')}
            >
              Get More NEW Customers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'current-customers' ? 'active' : ''}`}
              onClick={() => showTab('current-customers')}
            >
              Boost Current Customer Spend
            </button>
          </div>
          <div className={`tab-content ${activeTab === 'new-customers' ? 'active' : ''}`} id="new-customers">
            <div className="services-grid">
              <div className="service-item scroll-reveal">
                <i className="fas fa-desktop"></i>
                <h4>Website Design Refresh</h4>
                <p>Refine your site's branding and key pages for maximum conversion</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-search"></i>
                <h4>Google Account Audit</h4>
                <p>Optimize Search Console, Business Page, Analytics, and Ads</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Geofencing Ads</h4>
                <p>Target shoppers going to competitors and drive them to your store</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-ad"></i>
                <h4>Google Ads</h4>
                <p>Industry-leading ads tailored to liquor retail for consistent new customers</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-search-plus"></i>
                <h4>On-Page SEO</h4>
                <p>Optimize existing pages and create new ones to outrank competitors</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-link"></i>
                <h4>Off-Page SEO</h4>
                <p>Build authority through Google Business Profile, citations, and backlinks</p>
              </div>
            </div>
          </div>
          <div className={`tab-content ${activeTab === 'current-customers' ? 'active' : ''}`} id="current-customers">
            <div className="services-grid">
              <div className="service-item scroll-reveal">
                <i className="fas fa-envelope"></i>
                <h4>Tailored Emails</h4>
                <p>Personalized emails about your latest offers and events</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-mobile-alt"></i>
                <h4>Push & SMS Content</h4>
                <p>Real-time alerts for flash sales, exclusive deals, and events</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-print"></i>
                <h4>Design & Print Support</h4>
                <p>Ad materials, flyers, and handouts at short notice</p>
              </div>
              <div className="service-item scroll-reveal">
                <i className="fas fa-analytics"></i>
                <h4>Customer Data Analysis</h4>
                <p>Track interactions and refine offers to boost ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
