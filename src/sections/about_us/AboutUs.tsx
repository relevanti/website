import "./AboutUs.css"

import Image from "@/components/image/Image"
import * as React from "react"

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Кто такие Релеванты</h2>
        <p>
          <strong>
            Привет! Мы собираем вместе людей, стремящихся добиться чего-то большего в жизни, чтобы
            объединиться в команду, и вместе построить «стартовую площадку» для каждого из нас.
          </strong>
        </p>
        <div className="about-us-photo-mobile">
          <Image src="/images/group_photo.webp" alt="About Us" />
        </div>
        <p>
           «Стартовая площадка» универсальна: диверсифицированный капитал, крепкое здоровье,
            и проверенные временем партнеры-единомышленники, всегда готовые прийти на помощь.
            Для этого мы тщательно отбираем людей, стремительно развиваемся в личном,
            профессиональном и социальном направлениях, и делаем большой упор
            на взаимоподдержку и командную работу.
            <br/>
            <br/>
            Наши требования к участникам весьма высоки, и можно смело сказать, что Релеванты — это стиль жизни.
        </p>
      </div>
      <div className="about-us-photo">
        <Image src="/images/group_photo.webp" alt="About Us" aspectRatio={1} />
      </div>
    </div>
  )
}

export default AboutUs
