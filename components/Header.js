import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Arusoft
        </Link>
        
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 