'use client';

import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      id="header"
    >
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} id="logo">
          <div className={styles.logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="12" height="12" rx="3" fill="#16A34A" />
              <rect
                x="16"
                width="12"
                height="12"
                rx="3"
                fill="#5EEAD4"
                opacity="0.8"
              />
              <rect x="8" y="16" width="12" height="12" rx="3" fill="#064E3B" />
            </svg>
          </div>
          <span>
            ByteCraft<span className={styles.logoAccent}> Studio</span>
          </span>
        </a>

        <nav className={styles.nav} id="nav">
          <a href="#services" className={styles.navLink}>
            Services
          </a>
          <a href="#work" className={styles.navLink}>
            Work
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#process" className={styles.navLink}>
            Process
          </a>
          <a href="#why-us" className={styles.navLink}>
            Why Us
          </a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopCta}>
            <Button href="#contact" variant="primary" size="md" id="header-cta">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            className={`${styles.mobileMenuBtn} ${
              isMobileOpen ? styles.mobileMenuBtnOpen : ''
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobileMenuBtn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileNav} ${
          isMobileOpen ? styles.mobileNavOpen : ''
        }`}
        id="mobileNav"
      >
        <a
          href="#services"
          className={styles.mobileNavLink}
          onClick={() => setIsMobileOpen(false)}
        >
          Services
        </a>
        <a
          href="#work"
          className={styles.mobileNavLink}
          onClick={() => setIsMobileOpen(false)}
        >
          Work
        </a>
        <a
          href="#about"
          className={styles.mobileNavLink}
          onClick={() => setIsMobileOpen(false)}
        >
          About
        </a>
        <a
          href="#process"
          className={styles.mobileNavLink}
          onClick={() => setIsMobileOpen(false)}
        >
          Process
        </a>
        <a
          href="#why-us"
          className={styles.mobileNavLink}
          onClick={() => setIsMobileOpen(false)}
        >
          Why Us
        </a>
        <Button
          href="#contact"
          variant="primary"
          size="lg"
          onClick={() => setIsMobileOpen(false)}
        >
          Let&apos;s Talk
        </Button>
      </div>
    </header>
  );
}
