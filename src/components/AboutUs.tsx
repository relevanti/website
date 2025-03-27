import React from 'react';
import './AboutUs.css';

// import teamWorkImage from '../assets/relev_img.png';
import piggyImage from '../assets/piggy.png';
import chessStrategyImage from '../assets/chess.png';
import guyImage from '../assets/guy_table.png';
import groupImage from '../assets/team_work.png';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="content">
        <div className="main-text">
          <h1>Кто такие Релеванты?</h1>
          <div className="workspace-image">
            <img 
              src={guyImage} 
              alt="Workspace" 
              className="hero-image"
            />
          </div>
          <p>
            Представь себя в небольшой группе целеустремленных людей, которые искренне 
            заинтересованы в успехе друг друга. Вы работаете вместе, сосредотачиваясь 
            на процветании всего сообщества, ведь оно уже представляет ваши личные интересы. 
            Участники тщательно отобраны и проверены временем, и каждый на деле доказывает, 
            что на него можно положиться.
          </p>
          <p>
            Вместе мы хотим достичь плато, на котором можно строить дальнейшую жизнь: 
            финансовой независимости (см. движение FIRE), крепкого здоровья и сети 
            надежных знакомых.
          </p>
          <p className="highlight">И мы ищем единомышленников.</p>
        </div>

        <div className="info-grid">
          <div className="info-block">
            <h2>Кто участвует в Релевантах?</h2>
            <div className="block-image">
              <img 
                src={groupImage}
                alt="Team collaboration" 
              />
            </div>
            <p>
              Мы стремимся собрать вместе ответственных, трудолюбивых и адаптивных людей. Мастера на все руки, энергичные, старательные, усердные, гибкие, прагматичные, образованные, любознательные. Помогающие другим, стремящиеся улучшать все и всех вокруг себя, следующие зову самоотдачи.
            </p>
          </div>

          <div className="info-block">
            <h2>Это бесплатно?!</h2>
            <div className="block-image">
              <img 
                src={piggyImage}
                alt="Piggy bank" 
              />
            </div>
            <p>
              Это не про попытку заработать или экономию денег, это про более высокие и долгосрочные приоритеты, чем деньги, про единство, превосходство, понимание ценности сотрудничества, и искреннюю вовлеченность.
            </p>
          </div>

          <div className="info-block">
            <h2>Наш подход</h2>
            <div className="block-image">
              <img 
                src={chessStrategyImage} 
                alt="Chess strategy" 
              />
            </div>
            <p>
              Сложный и усердный труд, партнерские и товарищеские отношения, общее использование ресурсов, полное погружение в процесс, учеба, книги, научная фантастика, совместные трудности, сплочение группы, прагматичный подход, долгосрочные цели, здравый смысл вопреки романтике, поиск единомышленников, учеба сложнее, чем в вузе, труд сложнее, чем на работе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;