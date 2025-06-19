import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      {/* Animated background elements */}
      <div className="cta-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform Your <span className="highlight-text">Career</span> Today
          </motion.h2>
          
          <motion.p 
            className="cta-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join <strong>25,000+</strong> professionals who accelerated their growth with our courses
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses <FiArrowRight className="btn-icon" />
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="btn-icon" /> Get Free Consultation
            </motion.button>
          </motion.div>
          
          <div className="trust-badges">
            <div className="badge-item">
              <div className="badge-icon">🏆</div>
              <span>Top Rated Courses</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">👨‍💼</div>
              <span>Career Support</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">🔄</div>
              <span>Flexible Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cta;