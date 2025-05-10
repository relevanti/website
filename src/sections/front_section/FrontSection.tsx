import "./FrontSection.css"

import * as React from "react"

const FrontSection: React.FC = () => {
  return (
    <section className="front-section">
      <div className="content">
        <img src="/logo_no_text.svg" alt="Logo" className="logo-image" />
        <p className="community-title">RELEVANTI</p>
        <p className="description">
          Клуб людей, вместе стремящихся <br /> прожить невероятную жизнь
        </p>
        <a href="/#join" className="join-button">
          Вступить
        </a>
        <p className="main-points">
          капитал • долголетие • надежные люди рядом
        </p>
      </div>
    </section>
  )
}

export default FrontSection
