import React from 'react';
import styles from './EyebrowTag.module.css';

interface EyebrowTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'light';
  centered?: boolean;
  showDot?: boolean;
}

export default function EyebrowTag({
  children,
  variant = 'default',
  centered = false,
  showDot = false,
}: EyebrowTagProps) {
  return (
    <div
      className={`${styles.eyebrow} ${styles[variant]} ${centered ? styles.center : ''}`}
    >
      {showDot && <span className={styles.dot} />}
      {children}
    </div>
  );
}
