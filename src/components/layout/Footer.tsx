'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="12" height="12" rx="3" fill="#16A34A" />
                <rect
                  x="16"
                  width="12"
                  height="12"
                  rx="3"
                  fill="#5EEAD4"
                  opacity="0.8"
                />
                <rect
                  x="8"
                  y="16"
                  width="12"
                  height="12"
                  rx="3"
                  fill="#064E3B"
                />
              </svg>
              <span>
                ByteCraft<span className={styles.logoAccent}> Studio</span>
              </span>
            </a>
            <p className={styles.desc}>
              Designing and building high-speed web applications, AI tools, and
              digital products that help ambitious teams grow effortlessly.
            </p>
            <div className={styles.statusBadge}>
              <span className={styles.statusPulse} />
              All Systems Operational (99.99%)
            </div>
            <div className={styles.socials}>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="GitHub"
                id="footer-github"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="LinkedIn"
                id="footer-linkedin"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="X (Twitter)"
                id="footer-x"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <div className={styles.linkList}>
              <a href="#services" className={styles.link}>
                Web Applications
              </a>
              <a href="#services" className={styles.link}>
                AI & Machine Learning
              </a>
              <a href="#services" className={styles.link}>
                Mobile Apps
              </a>
              <a href="#services" className={styles.link}>
                SaaS Platforms
              </a>
              <a href="#services" className={styles.link}>
                Cloud Engineering
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.linkList}>
              <a href="#about" className={styles.link}>
                About Us
              </a>
              <a href="#work" className={styles.link}>
                Selected Work
              </a>
              <a href="#process" className={styles.link}>
                Our Process
              </a>
              <a href="#why-us" className={styles.link}>
                Why ByteCraft
              </a>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Dispatch</h4>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>
                Actionable engineering guides, product design tips, and AI updates straight to your inbox.
              </p>
              {subscribed ? (
                <p className={styles.newsletterText} style={{ color: '#5EEAD4' }}>
                  ✓ Thank you for subscribing!
                </p>
              ) : (
                <form className={styles.form} onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter work email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className={styles.submitBtn}>
                    →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ByteCraft Studio Inc. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
            <a href="#" className={styles.legalLink}>
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
