import Image from 'next/image';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import styles from './SelectedWork.module.css';

const PROJECTS = [
  {
    id: 'work-card-1',
    wide: true,
    tag: 'Autonomous AI',
    year: '2026',
    title: 'NexusAI — Multi-Agent AI Workflow Hub',
    desc: 'A smart platform where collaborative AI agents run complex research, automate team workflows, and process large-scale tasks on autopilot.',
    tech: ['Next.js 15', 'TypeScript', 'LangGraph', 'Python', 'WebSockets'],
    image: '/images/nexus-ai-card.jpg',
  },
  {
    id: 'work-card-2',
    wide: false,
    tag: 'SaaS Product',
    year: '2025',
    title: 'Stratix — Revenue & Growth Analytics',
    desc: 'A clear, real-time dashboard helping SaaS founders monitor MRR, spot customer churn risks early, and forecast revenue with AI.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: '/images/work-card-2.jpg',
  },
  {
    id: 'work-card-3',
    wide: false,
    tag: 'Enterprise App',
    year: '2024',
    title: 'ProjectHub — Collaborative Team Workspace',
    desc: 'A streamlined collaboration platform for remote teams with automated task tracking, live document editing, and top-tier security.',
    tech: ['Vue.js', 'Django', 'Redis', 'Docker'],
    image: '/images/work-card-3.jpg',
  },
];

export default function SelectedWork() {
  return (
    <section className={styles.work} id="work">
      <div className="container">
        <SectionHeader
          eyebrow="FEATURED WORK"
          title={
            <>
              Real products we built,
              <br />
              real results delivered.
            </>
          }
          subtitle="Here's a glimpse into the platforms, AI tools, and SaaS products we've recently brought to life."
        />

        <div className={styles.grid}>
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={project.wide ? styles.cardWide : ''}
            >
              <ScrollReveal delay={idx * 150} className={styles.revealWrap}>
                <SpotlightCard
                  id={project.id}
                  className={styles.card}
                >
                  <div className={styles.imgWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.img}
                      sizes={
                        project.wide
                          ? '(max-width: 900px) 100vw, 1200px'
                          : '(max-width: 900px) 100vw, 600px'
                      }
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.meta}>
                      <span className={styles.tag}>{project.tag}</span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.desc}</p>
                    <div className={styles.techList}>
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className={styles.techTag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className={styles.footerCta}>
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            id="view-all-work-btn"
          >
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
}
