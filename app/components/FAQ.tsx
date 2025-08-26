'use client'

import React, { useState } from 'react'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "How will your service help me increase in-store traffic?",
      answer: "We use a combination of local SEO, geofencing ads, and Google Ads to target customers in your area who are actively looking for liquor stores. Our strategies are specifically designed to drive foot traffic to your physical location."
    },
    {
      question: "Can you integrate with my existing City Hive platform?",
      answer: "Absolutely! We're experts in the City Hive platform and can seamlessly integrate our marketing strategies with your existing setup to maximize efficiency and results."
    },
    {
      question: "How do you measure success?",
      answer: "We track key metrics including website traffic, new customer acquisition, revenue growth, and ROI. You'll receive detailed monthly reports showing exactly how our efforts are impacting your bottom line."
    },
    {
      question: "Can you help me with promotions during the holidays?",
      answer: "Yes! We specialize in seasonal campaigns and holiday promotions. We'll create targeted campaigns for major holidays, special events, and seasonal trends to maximize your sales during peak periods."
    },
    {
      question: "Do I need to sign up for both offers?",
      answer: "No, you can choose the package that best fits your needs. Our \"Get More NEW Customers\" package is our core offering, while the \"Content Marketing Add-On\" is optional for stores wanting to boost current customer spend."
    }
  ]

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item scroll-reveal ${openFaq === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
