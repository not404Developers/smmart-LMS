import { motion } from 'framer-motion';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Interactive Learning',
      description: 'Engage with hands-on projects and real-world scenarios'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Learn on the go with our responsive platform'
    },
    {
      icon: '🎓',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and top educators'
    },
    {
      icon: '⏱️',
      title: 'Self-Paced',
      description: 'Complete courses on your own schedule'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Connect with peers and mentors in our learning community'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0, 150, 214, 0.2)",
    transition: { duration: 0.3 }
  };

  return (
    <section className="features-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="section-title">Why Choose smmart?</h2>
          <p className="section-subtitle">Explore the features that empower your learning experience</p>
        </motion.div>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;