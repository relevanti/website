import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoAndSpan}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>RELEVANTI</span>
          </div>
          <p>© 2025 Сообщество Релеванты</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <div className={styles.community}>
              <a href="#">О сообществе</a>
            </div>
            <div className={styles.strategy}>
              <a href="#">Стратегия</a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.partnership}>
              <a href="#">Партнерство</a>
            </div>
            <div className={styles.faq}>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className={styles.join}>
            <a href="#">Вступить</a>
          </div>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.telegram}>
            <p>Telegram: @relevanti</p>
          </div>
          <div className={styles.mail}>
            <a href="mailto:contact@relevanti.org">contact@relevanti.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;