import React from 'react';
import styles from './HeroSection.module.css'; // Импортируем стили

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText }) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.titldesc}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default HeroSection;