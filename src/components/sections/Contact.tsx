'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="LET'S CONNECT"
          title="Have an idea? Let’s make it happen."
          subtitle="Tell us about what you want to build. We’ll respond with actionable technical advice, realistic timelines, and a clear next step."
        />

        <div className={styles.card}>
          <div className={styles.formCol}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  Inquiry Received!
                </h3>
                <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>
                  Thank you for reaching out. Our technical partners will review
                  your requirements and respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formCol}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Technologies Inc."
                    className={styles.input}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>


                <div className={styles.inputGroup}>
                  <label className={styles.label}>Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you want to build, any specific features, or your target launch timeline..."
                    className={styles.textarea}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" id="cta-main-btn">
                  Submit Project Inquiry →
                </Button>
              </form>
            )}
          </div>

          <div className={styles.infoCol}>
            <div>
              <h3 className={styles.infoTitle}>Direct Touchpoints</h3>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '8px' }}>
                Prefer a direct conversation? Reach out directly to our engineering leads.
              </p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Direct Line</span>
              <a
                href="mailto:hello@bytecraftstudio.com"
                className={styles.infoValue}
                id="cta-email"
              >
                hello@bytecraftstudio.com
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Global Hubs</span>
              <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500' }}>
                San Francisco, CA &amp; Remote
              </span>
              <span style={{ fontSize: '12px', color: '#5EEAD4', marginTop: '2px' }}>
                PST / UTC-8 • Active Working Hours
              </span>
            </div>

            <div className={styles.guarantee}>
              <span>🔒</span>
              <span>100% Confidential. Mutual NDAs signed before deep technical discussions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
