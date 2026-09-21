import React from 'react';
import styles from './BorderBeam.module.css';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  colorFrom?: string;
  colorTo?: string;
}

export default function BorderBeam({
  duration = 6,
  colorFrom = '#5EEAD4',
  colorTo = '#22C55E',
}: BorderBeamProps) {
  return (
    <div className={styles.borderBeamContainer}>
      <div
        className={styles.beam}
        style={{
          animationDuration: `${duration}s`,
          background: `conic-gradient(from 0deg, transparent 0 330deg, ${colorFrom} 350deg, ${colorTo} 360deg)`,
        }}
      />
    </div>
  );
}
