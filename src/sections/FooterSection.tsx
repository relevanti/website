import React from 'react';
import styles from './FooterSection.module.css'; // Создадим этот файл
import Footer from './Footer.tsx';
import HeroSection from './HeroSection.tsx';

const FooterSection: React.FC = () => {
  return (
    <div className={styles['footerBlock']}> {/* Обратите внимание на использование квадратных скобок */}
      <div className={styles.container2}>
        <HeroSection
          title="Как вступить?"
          description="Пройди по ссылке и заполни форму на вступление"
          buttonText="Вступить"
        />
      </div>
      <Footer />
    </div>
  );
};

export default FooterSection;