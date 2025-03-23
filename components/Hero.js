import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Transforming Ideas into
          <span className={styles.highlight}> Digital Reality</span>
        </h1>
        <p className={styles.subtitle}>
          Professional software solutions for modern businesses
        </p>
        <div className={styles.ctaContainer}>
          <a href="#contact" className={styles.primaryButton}>
            Get Started
          </a>
          <a href="#projects" className={styles.secondaryButton}>
            View Our Work
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.imageOverlay} />
      </div>
    </section>
  );
};

export default Hero; 