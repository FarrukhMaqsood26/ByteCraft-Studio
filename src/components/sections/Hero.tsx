import CountUp from '../animations/CountUp';
import StaggerReveal from '../animations/StaggerReveal';
import Button from '../ui/Button';
import ThreeDLogo from '../ui/ThreeDLogo';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.bgBlob3} />

      <div className={`container ${styles.inner}`}>
        {/* LEFT: Content */}
        <div className={styles.content}>
          <StaggerReveal delay={0}>
            <h1 className={styles.headline}>
              We Build Digital<br />
              Products That{' '}
              <span className={`gradient-text ${styles.headlineAccent}`}>
                People Actually<br />
                Love to Use.
              </span>
            </h1>
          </StaggerReveal>

          <StaggerReveal delay={100}>
            <p className={styles.subtext}>
              Skip the complexity and delays. We design, code, and ship high-speed
              web applications, AI tools, and digital platforms that turn your
              vision into measurable growth.
            </p>
          </StaggerReveal>

          <StaggerReveal delay={200}>
            <div className={styles.actions}>
              <Button href="#contact" variant="primary" size="lg" id="hero-primary-cta">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button href="#work" variant="secondary" size="lg" id="hero-secondary-cta">
                Explore Our Work
              </Button>
            </div>
          </StaggerReveal>

          <StaggerReveal delay={350}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={80} suffix="+" /></span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={40} suffix="+" /></span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={6} suffix="+" /></span>
                <span className={styles.statLabel}>Years of Craft</span>
              </div>
            </div>
          </StaggerReveal>
        </div>

        {/* RIGHT: Visual */}
        <StaggerReveal delay={150} direction="scale">
          <div className={styles.visual}>
            <div className={styles.imgGlowBackdrop} />
            <div className={styles.imgWrapper}>
              <ThreeDLogo />
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
