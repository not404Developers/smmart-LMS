import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Features from '../../components/FeaturesSection/FeaturesSection';
import Course from '../../components/CourseSection/CourseSection';
import Testimonial from '../../components/TestimonialSection/TestimonialSection';
import Cta from '../../components/Cta/Cta';
import Stats from '../../components/LearningStatistics/LearningStatistics';
import Faq from '../../components/Faq/Faq';
import Hero from './Hero';
import Footer from '../../components/Footer/Footer';

import Container from '../../components/Layout/Container';
import './Home.css';

const Home = () => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Container>
        <Hero />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Course />
      </Container>
      {/* <Container>
        <Testimonial />
      </Container> */}
      <Container>
        <Cta />
      </Container>
      <Container>
        <Stats />
      </Container>
      <Container>
        <Faq />
      </Container>
      <Container>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Home;