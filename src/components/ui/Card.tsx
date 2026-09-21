import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  hover?: boolean;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'light',
  hover = true,
  className = '',
  id,
  onClick,
}: CardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`${styles.card} ${
        variant === 'dark' ? styles.cardDark : ''
      } ${hover ? styles.cardHover : ''} ${className}`}
    >
      {children}
    </div>
  );
}
