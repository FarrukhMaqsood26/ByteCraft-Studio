import ScrollReveal from '../animations/ScrollReveal';
import SpotlightCard from '../ui/SpotlightCard';
import SectionHeader from '../ui/SectionHeader';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    num: '01',
    title: 'High-Speed Web Apps',
    desc: 'Blazing-fast websites and web apps tailored to your users. Built with clean code, modern security, and ready to scale with your traffic.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Mobile App Development',
    desc: 'Smooth iOS and Android apps that feel natural and responsive. We create polished mobile experiences that keep your users coming back.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Practical AI & Automation',
    desc: 'Put smart technology to work. We integrate custom AI agents, automated workflows, and predictive models that eliminate busywork.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'SaaS Platforms from Scratch',
    desc: 'Complete subscription software built to grow. We implement user authentication, recurring Stripe billing, team roles, and intuitive dashboards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17l6-6 4 4 6-8" />
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Intuitive UI/UX Design',
    desc: 'Clean, elegant interfaces that make complex tools effortless to use. No confusing menus or steep learning curves — just smooth user journeys.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Cloud Infrastructure & APIs',
    desc: 'Bulletproof backends and lightning-fast APIs. Engineered to handle traffic spikes smoothly with 99.9% uptime and zero launch-day panic.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="Full-Stack Craftsmanship, Done Right."
          subtitle="From sleek interfaces to robust backends and smart AI automation — we build everything your product needs to succeed."
        />

        <div className={styles.grid}>
          {SERVICES_DATA.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <SpotlightCard className={styles.card} enableTilt={true}>
                <div className={styles.num}>{service.num}</div>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
                <div className={styles.arrow}>
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
