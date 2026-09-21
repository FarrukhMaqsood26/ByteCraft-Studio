import styles from './TrustBar.module.css';

const LOGOS = [
  { prefix: '◈', name: 'Nexora AI' },
  { prefix: '▲', name: 'Veltrix Health' },
  { prefix: '◆', name: 'Orbify Data' },
  { prefix: '●', name: 'Clarive SaaS' },
  { prefix: '⬡', name: 'Stratex Finance' },
  { prefix: '❖', name: 'Aether Labs' },
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className="container">
        <p className={styles.label}>Trusted by fast-growing startups and ambitious engineering teams worldwide</p>
        <div className={styles.logosTrack}>
          <div className={styles.logos}>
            {LOGOS.concat(LOGOS).map((logo, idx) => (
              <div key={idx} className={styles.logo}>
                <span className={styles.prefix}>{logo.prefix}</span>
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
