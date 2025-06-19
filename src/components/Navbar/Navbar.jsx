import { motion } from 'framer-motion';
import { FiBook, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 10 }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a 
            href="#features" 
            className="nav-link"
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#courses" 
            className="nav-link"
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
          >
            Courses
          </motion.a>
          <motion.a 
            href="#pricing" 
            className="nav-link"
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
          >
            Pricing
          </motion.a>
          <motion.a 
            href="#contact" 
            className="nav-link"
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
          >
            Contact
          </motion.a>
          
          <div className="search-mobile">
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search courses..." />
            </div>
          </div>
        </div>

        <div className="navbar-actions">
          <div className="search-desktop">
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search courses..." />
            </div>
          </div>
          
          <motion.button 
            className="btn btn-login"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiUser className="btn-icon" /> Login
          </motion.button>
          
          <motion.button 
            className="btn btn-signup"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(249, 115, 22, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;