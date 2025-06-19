import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is an LMS?",
    answer: "An LMS is a digital platform that helps you create, deliver, and track learning programs with ease."
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Yes, the LMS is optimized for all screen sizes, including phones and tablets."
  },
  {
    question: "Are the certificates verifiable?",
    answer: "All certificates have unique IDs and QR codes for secure online verification."
  },
  {
    question: "How can I track my progress?",
    answer: "Your course progress is tracked in real-time and synced across devices."
  },
  {
    question: "Do I need to pay for all courses?",
    answer: "We offer both free and premium courses. You can start learning without any upfront payment."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <div className="faq-title">
        <h2><span>Got Questions?</span> We've Got Answers!</h2>
        <p>Explore common queries learners have before getting started.</p>
      </div>
      <div className="faq-timeline">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-dot" />
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="question-content">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
            </div>
            <div className="faq-answer">
              <div className="answer-content">
                <p>{faq.answer}</p>
                {activeIndex === index && (
                  <div className="answer-decoration">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;