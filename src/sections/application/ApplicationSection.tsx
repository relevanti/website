import "./ApplicationSection.css"

import React from "react"

const ApplicationSection: React.FC = () => {
  return (
    <section className="application-section">
      <h1 className="application-title">Как вступить?</h1>
      <div className="application-content">
        <div className="application-paragraph">
          <p>
            Вместе мы хотим достичь плато, на котором можно строить дальнейшую
            жизнь: финансовой независимости (см. движение FIRE), крепкого
            здоровья и сети надежных знакомых.
          </p>
        </div>
        <div className="application-paragraph">
          <p>
            <strong>
              Представь себя в небольшой группе людей которые искренне
              заинтересованы в успехе друг друга. Вы работаете вместе, Представь
              себя в небольшой группе людей
            </strong>
          </p>
        </div>
      </div>
      <div className="application-details">
        <h2>Ты подходишь нам, если:</h2>
        <ol>
          <li>Стремишься к самосовершенствованию,</li>
          <li>Умеешь работать в команде, фокусироваться на групповых целях,</li>
          <li>Образован и готов к дальнейшему обучению,</li>
          <li>
            Свободно владеешь русским и имеешь хорошие навыки английского языка,
          </li>
          <li>Остаешься невовлеченным в идеологии, религии и традиции,</li>
          <li>Имеешь развитый самоконтроль, силу воли,</li>
          <li>Обладаешь высокой работоспособностью.</li>
        </ol>
        <h2>Ты не подходишь нам, если имеешь:</h2>
        <ul>
          <li>Зависимости и вредные привычки, криминальные наклонности,</li>
          <li>Физические и психические ограничениями трудоспособности.</li>
        </ul>
      </div>
    </section>
  )
}

export default ApplicationSection
