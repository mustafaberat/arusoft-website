import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={`${styles.brandContainer} ${styles.reveal} ${styles.delay1}`}>
          <span className={styles.brandName}>ARU SOFT</span>
        </div>

        <h1 className={`${styles.title} ${styles.reveal} ${styles.delay2}`}>
          From Vision to Code
        </h1>

        <p className={`${styles.subtitle} ${styles.reveal} ${styles.delay3}`}>
          Your ideas, perfectly transformed into reality
        </p>

        <div className={`${styles.ctaContainer} ${styles.reveal} ${styles.delay4}`}>
          <a
            href="mailto:arusoft.company@gmail.com"
            className={styles.primaryButton}
          >
            Start Building
          </a>
          <a
            href="#projects"
            className={styles.secondaryButton}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Explore Our Work
          </a>
        </div>

        <div className={`${styles.statsContainer} ${styles.reveal} ${styles.delay5}`}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>

      <div className={styles.heroImage} aria-hidden="true">
        <div className={styles.imageOverlay} />
      </div>
    </section>
  );
};

export default Hero;
