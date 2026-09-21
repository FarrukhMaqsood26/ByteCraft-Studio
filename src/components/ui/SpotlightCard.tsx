'use client';

import React, { useRef, useState } from 'react';
import styles from './SpotlightCard.module.css';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spotlightColor?: string;
  borderGlowColor?: string;
  enableTilt?: boolean;
}

export default function SpotlightCard({
  children,
  className = '',
  id,
  spotlightColor = 'rgba(22, 163, 74, 0.07)',
  borderGlowColor = 'rgba(22, 163, 74, 0.35)',
  enableTilt = false,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
      const rotateY = ((x - centerX) / centerX) * 6;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  };

  const transformStyle = enableTilt
    ? {
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }
    : {};

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.spotlightCard} ${className}`}
      style={transformStyle}
    >
      {/* Border Spotlight Beam */}
      <div
        className={styles.borderSpotlight}
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, ${borderGlowColor}, transparent 70%)`,
        }}
      />

      {/* Inner Surface Spotlight Glow */}
      <div
        className={styles.innerSpotlight}
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
