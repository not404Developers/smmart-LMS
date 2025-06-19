import { motion } from 'framer-motion';
import './Hero.css';
import { useState } from 'react';
import { FiPlay, FiBookOpen, FiArrowRight, FiSearch } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const rightSectionVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.18,
      delayChildren: 0.2,
    }
  }
};

const rightItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h6 className="hero-label" variants={itemVariants}>
              <span className="label-badge">NEW</span>
              <span>Interactive Learning Platform</span>
            </motion.h6>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Learn <span className="text-gradient">Without</span> Limits
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Master new skills with our immersive courses taught by industry leaders. 
              Join over 500,000 learners transforming their careers.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <FiArrowRight className="btn-icon" />
              </motion.button>

              <button className="btn-play" onClick={handleVideoPlay}>
                <div className="play-circle">
                  <FiPlay />
                </div>
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Courses</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          variants={rightSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Students learning together"
            className="hero-background-image"
            variants={rightItemVariants}
          />

          <div className="floating-card card-1">
            <FiBookOpen className="card-icon" />
            <h4>500+ Courses</h4>
            <p>From industry experts</p>
          </div>

          <div className="floating-card card-2">
            <div className="play-button">
              <FiPlay />
            </div>
            <h4>Watch Intro</h4>
          </div>

          <motion.div className="search-container" variants={rightItemVariants}>
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="What do you want to learn today?"
              className="search-input"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;