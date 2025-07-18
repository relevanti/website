import "./Develop.css"

import React from "react"

interface TimelineItem {
  id: number
  title: string
  description: string
}

const DevelopmentPrioritiesTimeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Формирование команды",
      description: "изучаем целесообразность единомышленников",
    },
    {
      id: 2,
      title: "Становление команды",
      description:
        "учимся работать вместе, решая актуальные проблемы друг друга",
    },
    {
      id: 3,
      title: "Накопление ресурсов",
      description:
        "получаем навыки строим карьеру, создаем сеть знакомств, собираем стартовый капитал",
    },
    {
      id: 4,
      title: "Стратегические проекты",
      description:
        "запускаем инвестиционные проекты, аккумулируем капитал сообщества",
    },
    {
      id: 5,
      title: "Свободный выбор",
      description: "решаем, что хотим делать дальше с новыми возможностями",
    },
  ]

  return (
    <div className="timeline-container">
      <div className="timeline-title">Акценты развития</div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        <div className="timeline-items">
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevelopmentPrioritiesTimeline
