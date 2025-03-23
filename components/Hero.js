import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.brandContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.brandName}>ARU SOFT</span>
        </motion.div>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From Vision to Code
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your ideas, perfectly transformed into reality
        </motion.p>
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="mailto:arusoft.company@gmail.com"
            className={styles.primaryButton}
            whileHover={{ scale: 1.05, backgroundColor: '#132B45' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building
          </motion.a>
          <motion.a 
            href="#projects" 
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Explore Our Work
          </motion.a>
        </motion.div>
        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </motion.div>
          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </motion.div>
          <motion.div 
            className={styles.statItem}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.imageOverlay} />
      </motion.div>
    </section>
  );
};

export default Hero; 