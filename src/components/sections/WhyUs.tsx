import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';
import EyebrowTag from '../ui/EyebrowTag';
import styles from './WhyUs.module.css';

const REASONS = [
  {
    id: 'why-card-1',
    title: 'Outcome-Focused Strategy',
    desc: 'We prioritize features that move the needle for your business, keeping things lean, focused, and free of unnecessary fluff.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L11 18L5.82 21.02L7 14.14L2 9.27L8.91 8.26L11 2Z" />
      </svg>
    ),
  },
  {
    id: 'why-card-2',
    title: 'Bulletproof Engineering',
    desc: 'Clean, modular architecture that loads in milliseconds, scales seamlessly with your user base, and won’t require costly rewrites later.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'why-card-3',
    title: 'Frictionless User Experience',
    desc: 'Simple, intuitive interfaces that your customers can navigate effortlessly without ever needing a tutorial or user manual.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'why-card-4',
    title: 'Dedicated Technical Partner',
    desc: 'We treat your product as if it were our own. We stay available, responsive, and committed to your long-term product success.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L11 6.67l-2.06-2.06a5.5 5.5 0 0 0-7.78 7.78l2.06 2.06L11 22l7.78-7.78 2.06-2.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <EyebrowTag>WHY CHOOSE US</EyebrowTag>
          <h2 className={styles.title}>
            Engineered for
            <br />
            Speed &amp; Quality.
          </h2>
          <p className={styles.subtext}>
            We combine the agility of a startup crew with the craftsmanship of senior engineers. You get world-class software delivered on time, without agency red tape.
          </p>
          <div>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              id="why-us-cta"
            >
              Start a Conversation →
            </Button>
          </div>
        </div>

        <div className={styles.grid}>
          {REASONS.map((reason, idx) => (
            <ScrollReveal key={reason.id} delay={idx * 100}>
              <div className={styles.card} id={reason.id}>
                <div className={styles.icon}>{reason.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardDesc}>{reason.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
