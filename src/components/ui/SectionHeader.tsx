import React from 'react';
import EyebrowTag from './EyebrowTag';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  eyebrowVariant?: 'default' | 'light';
  showDot?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  eyebrowVariant = 'default',
  showDot = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`${styles.header} ${
        align === 'left' ? styles.headerLeft : ''
      }`}
    >
      <EyebrowTag
        variant={eyebrowVariant}
        centered={align === 'center'}
        showDot={showDot}
      >
        {eyebrow}
      </EyebrowTag>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
