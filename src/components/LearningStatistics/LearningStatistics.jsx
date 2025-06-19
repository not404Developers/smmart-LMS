import { useEffect, useRef } from 'react';
import './LearningStatistics.css';

const LearningStatistics = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numberElement = entry.target.querySelector('.stat-number');
          const target = parseInt(numberElement.getAttribute('data-count'));
          const suffix = numberElement.textContent.includes('+') ? '+' : 
                        numberElement.textContent.includes('%') ? '%' : '';
          animateCount(numberElement, target, suffix);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const animateCount = (element, target, suffix) => {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-title">Our Learning Community</h2>
        <p className="stats-subtitle">Join thousands of happy learners worldwide</p>
        
        <div className="stats-grid">
          {[
            { icon: '👩‍🎓', number: '50000+', label: 'Active Students', color: '#6366f1' },
            { icon: '📚', number: '1200+', label: 'Courses Available', color: '#10b981' },
            { icon: '😊', number: '98%', label: 'Satisfaction Rate', color: '#f59e0b' },
            { icon: '👨‍🏫', number: '500+', label: 'Expert Instructors', color: '#ef4444' }
          ].map((stat, index) => (
            <div 
              key={index}
              ref={el => statRefs.current[index] = el}
              className="stat-card"
              style={{ '--stat-color': stat.color }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div 
                className="stat-number" 
                data-count={stat.number.replace(/\D/g, '')}
              >
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
              <button 
                className="stat-button"
                aria-label={`Learn more about ${stat.label}`}
              >
                <span>+</span>
              </button>
              <div className="stat-wave"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningStatistics;