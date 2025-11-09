import * as React from "react"

import "./BigFooterSection.css"

const BigFooterSection: React.FC = () => {
  return (
    <section id="join" className="big-footer-section">
      <div className="enroll-section">
        <h2 className="big-footer-header">Напиши нам</h2>
        {/* <p className="big-footer-paragraph">
          1. Заполни форму по ссылке
          <br />
          2. Обсуди концепцию на собеседовании
          <br />
          3. Покажи заинтересованность действием
        </p> */}
        <a href="https://t.me/RELEVANTY_CLUB" className="join-button">
          Вступить
        </a>
      </div>
      <div className="big-footer-content">
        <div className="big-footer-contact-details">
          {/* <p>hello@relevanty.org</p> */}
          <p>© 2025 Сообщество Релеванты</p>
        </div>
      </div>
    </section>
  )
}

export default BigFooterSection
