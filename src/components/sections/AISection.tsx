import Image from 'next/image';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';
import EyebrowTag from '../ui/EyebrowTag';
import styles from './AISection.module.css';

const POINTS = [
  'Built-in intelligence from day one — not tacked on later',
  'Instant answers and smart automated workflows for your users',
  'Adaptive models that get smarter as your business expands',
  'Safe, private, and explainable AI you can completely trust',
];

export default function AISection() {
  return (
    <section className={styles.aiSection} id="about">
      <div className={`container ${styles.inner}`}>
        <ScrollReveal animation="slide-in-left">
          <div className={styles.content}>
            <EyebrowTag variant="light">BUILT-IN INTELLIGENCE</EyebrowTag>

            <h2 className={styles.title}>
              Software That Thinks
              <br />
              One Step Ahead.
            </h2>

            <p className={styles.subtext}>
              Skip the AI hype. We integrate practical machine learning and intelligent
              automation that speeds up workflows, removes repetitive busywork, and creates
              effortless experiences your customers will love.
            </p>

            <div className={styles.points}>
              {POINTS.map((point, idx) => (
                <div key={idx} className={styles.point} id={`ai-point-${idx + 1}`}>
                  <div className={styles.pointIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="8"
                        stroke="#5EEAD4"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M5.5 9l2.5 2.5 4.5-5"
                        stroke="#5EEAD4"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div>
              <Button
                href="#contact"
                variant="mint"
                size="lg"
                id="ai-cta-btn"
              >
                Explore Our AI Approach →
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-in-right">
          <div className={styles.visual}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/ai-section-visual.jpg"
                alt="ByteCraft Studio abstract AI neural network graphic"
                width={600}
                height={500}
                className={styles.img}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
