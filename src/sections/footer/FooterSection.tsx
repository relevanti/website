import "./FooterSection.css"

import * as React from "react"

const FooterSection: React.FC = () => {
  return (
    <section id="join" className="footer-section">
      <div className="enroll-section">
        <h2 className="footer-header">Мы искали тебя</h2>
        <p className="footer-paragraph">
          1. Заполни форму по ссылке
          <br />
          2. Обсуди концепцию на собеседовании
          <br />
          3. Покажи заинтересованность действием
        </p>
        <a href="https://relevanti.org/apply" className="join-button">
          Вступить
        </a>
      </div>
      <div className="footer-content">
        <div className="contact-details">
          <p>contact@relevanti.org</p>
          <p>© 2025 Сообщество Релеванты</p>
        </div>
      </div>
    </section>
  )
}

export default FooterSection
