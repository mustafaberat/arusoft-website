import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          <Image
            src="/aru.jpeg"
            alt="Aru Logo"
            width={1}
            height={1}
            priority
          />
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