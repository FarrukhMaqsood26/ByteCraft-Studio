import ScrollReveal from '../animations/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';
import styles from './Process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Discover & Map',
    desc: 'We start by understanding your vision and your users. We define the core problem, trim away unneeded features, and map out the fastest route to launch.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9" />
        <path d="M11 7v4l3 3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Interactive Design',
    desc: 'We build interactive, clickable prototypes before writing any code. You get to test and experience the real user flows and feel of your product.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-4 4 4 8-10" />
        <path d="M2 20h18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Rapid Sprints & Code',
    desc: 'Our engineers build your product in transparent weekly sprints. You receive live preview builds, clear updates, and robust, test-backed code.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'We orchestrate a smooth launch, keep an eye on performance around the clock, and help you gather real user feedback to iterate quickly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <SectionHeader
          eyebrow="HOW WE WORK"
          title="From Concept to Launch in 4 Clear Steps."
          subtitle="No confusing tech jargon, endless meetings, or surprise invoices. Just a predictable, battle-tested path to launch."
        />

        <div className={styles.timeline}>
          {STEPS.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className={styles.step} id={`process-step-${idx + 1}`}>
                <div className={styles.stepHeader}>
                  <span className={styles.num}>{step.num}</span>
                  <div className={styles.icon}>{step.icon}</div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.desc}>{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
