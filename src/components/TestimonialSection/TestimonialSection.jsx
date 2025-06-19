import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import './TestimonialSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const testimonials = [
    {
      quote: "smmart completely transformed my career path. The project-based learning approach made all the difference.",
      name: "Alex Thompson",
      role: "Senior Frontend Engineer @Google",
      avatar: "/images/avatar1.jpg",
      rating: 5,
      id: 1
    },
    {
      quote: "As a designer transitioning to UX research, smmart's courses gave me the exact skills I needed to land my dream role.",
      name: "Priya Patel",
      role: "UX Researcher @Meta",
      avatar: "/images/avatar2.jpg",
      rating: 4,
      id: 2
    },
    {
      quote: "The data science program had me interview-ready in 3 months. I doubled my salary thanks to smmart's career coaching.",
      name: "Jamal Williams",
      role: "Data Scientist @Netflix",
      avatar: "/images/avatar3.jpg",
      rating: 5,
      id: 3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const resetMousePosition = () => {
    animate(mouseX, 0, { duration: 0.5 });
    animate(mouseY, 0, { duration: 0.5 });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="section-title">
            <span>Transformative</span>
            <span>Learning</span>
            <span>Experiences</span>
          </h2>
          <p className="section-subtitle">Join 50,000+ professionals who accelerated their careers</p>
        </motion.div>

        <div className="testimonial-viewport">
          <motion.div 
            className="testimonial-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMousePosition}
            style={{
              rotateY: useMotionTemplate`${mouseX}deg`,
              rotateX: useMotionTemplate`${mouseY}deg`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0.6,
                  scale: index === activeIndex ? 1 : 0.9,
                  zIndex: index === activeIndex ? 1 : 0
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.4 }
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="card-inner">
                  <div className="quote-mark">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M20 20H40V40L30 60V40H10V20H20Z" fill="url(#quoteGradient)" />
                      <path d="M50 20H70V40L60 60V40H40V20H50Z" fill="url(#quoteGradient)" />
                      <defs>
                        <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF6B00" />
                          <stop offset="100%" stopColor="#0066FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-footer">
                    <div className="author-info">
                      <div className="avatar-container">
                        <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                        <div className="avatar-halo"></div>
                      </div>
                      <div>
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                              fill={i < testimonial.rating ? "url(#starGradient)" : "#E5E7EB"} />
                            {i < testimonial.rating && (
                              <defs>
                                <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#FF6B00" />
                                  <stop offset="100%" stopColor="#FFA800" />
                                </linearGradient>
                              </defs>
                            )}
                          </svg>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-background"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="testimonial-nav">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            >
              <div className="dot-progress"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;