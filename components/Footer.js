import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Arusoft</h3>
            <p className={styles.description}>
              Transforming ideas into digital reality with professional software solutions.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Quick Links</h3>
            <nav className={styles.nav}>
              <Link href="#services" className={styles.link}>Services</Link>
              <Link href="#projects" className={styles.link}>Projects</Link>
              <Link href="#about" className={styles.link}>About</Link>
              <Link href="#contact" className={styles.link}>Contact</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.contactInfo}>
              <p>Email: info@arusoft.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Digital City</p>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Arusoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 