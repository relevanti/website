import "./AboutUs.css"

import * as React from "react"

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Кто такие Релеванты?</h2>
        <p>
          <strong>
            Представь себя в небольшой группе людей которые искренне
            заинтересованы в успехе друг друга. Вы работаете вместе,
            сосредотачиваясь на процветании всего сообщества, ведь оно уже
            представляет ваши личные интересы. <br /> <br /> И мы ищем
            единомышленников.
          </strong>
        </p>
        <div className="about-us-photo-mobile">
          <img src="/images/group_photo.png" alt="About Us" />
        </div>
        <p>
          Вместе мы хотим достичь плато, на котором можно строить дальнейшую
          жизнь: финансовой независимости (см. движение FIRE), крепкого здоровья
          и сети надежных знакомых. Участники тщательно отобраны и проверены
          временем, и каждый на деле доказывает, что на него можно положиться.
        </p>
      </div>
      <div className="about-us-photo">
        <img src="/images/group_photo.png" alt="About Us" />
      </div>
    </div>
  )
}

export default AboutUs
