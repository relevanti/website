import "./BigFooterSection.css"

import * as React from "react"

const BigFooterSection: React.FC = () => {
  return (
    <section id="join" className="big-footer-section">
      <div className="enroll-section">
        <h2 className="big-footer-header">Мы искали тебя</h2>
        <p className="big-footer-paragraph">
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
      <div className="big-footer-content">
        <div className="big-footer-contact-details">
          <p>hello@relevanti.org</p>
          <p>© 2025 Сообщество Релеванты</p>
        </div>
      </div>
    </section>
  )
}

export default BigFooterSection
