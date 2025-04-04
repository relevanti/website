import './Events_section.css';
import React from 'react';
type EventStatus = "В планах" | "Действует" | "Идет набор";

const statusClassMap: Record<EventStatus, string> = {
  "В планах": "planned",
  "Действует": "active",
  "Идет набор": "recruiting"
};

interface Event {
  status: EventStatus;
  title: string;
  description: string;
  regularity: string;
}

const eventsData: Event[] = [
  {
    status: "Действует",
    title: "Мастермайнд-группа",
    description:
      "Строго модерируемые встречи, направленные на преодоление текущих затруднений.",
    regularity: "Ежедневные короткие звонки \n(около 5-15 мин)",
  }
  ,{
    status: "Идет набор",
    title: "Книжный клуб",
    description:
      "Вспоминаем мудрость детских книг, находим мечту в научной фантастике. \nСинхронизируем моральные ценности.",
    regularity: "Беседы 1 раз в неделю",
  },

  {
    status: "Действует",
    title: "Клуб английского языка",
    description:
      "Акцент на практику — разговорную и письменную. Уровень от B1 до C2. Поддержание и развитие уровня.",
    regularity: "Беседы 1 раз в неделю",
  },
  {
    status: "Идет набор",
    title: "Прикладное программирование",
    description: "Основы fullstack разработки. Начало с теории и frontend. JavaScript, React, NodeJS. \nОриентир на трудоустройство.",
    regularity: "Ежедневное взаимообучение",
  },
  {
    status: "Идет набор",
    title: "Развитие коммуникативных навыков ",
    description:
      "Самопрезентация, навыки продаж,публичные выступления, сторителлинг, письменная речь. Практические занятия, сессии.",
    regularity: "1 раз в неделю",
  },
  {
    status: "Действует",
    title: "Формирвание сообщества",
    description:
      "Поиск и рекомендация кандидатов. Продвижение сообщества. Подготовка материалов. \nЭто наша основная задача на данный момент. ",
    regularity: "Ежедневная работа",
  },
  {
    status: "Идет набор",
    title: "Тренировки прохождения собеседований",
    description:
      "Алгоритмы и структуры данных, архитектурные и поведенческие секции. Уровень от Intern до Staff. Взаимные тестовые собеседования.",
    regularity: "Онлайн встречи 1 раз в неделю",
  },
  {
    status: "В планах",
    title: "Сборы",
    description:
      "Собираемся вместе для реализации краткосрочного проекта. Например, поучаствовать в хакатоне или сходить в поход. ",
    regularity: "2-4 дня без работы, или до 2 недель, совмещая с работой. \nОколо 2 раз в год",
  },
];


// Функция для преобразования \n в <br />
const formatText = (text: string) => {
  return text.split('\n').map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ));
};

function Events_section() {
  return (
    <div className="container">
      <div className="sidebar">Наши события</div>
      <div className="events">
        <div className="box">
          {eventsData.map((event, index) => (
            <div key={index}>
              <div className={`status-${statusClassMap[event.status]}`}>
                {event.status}
              </div>
              <div className="title">{event.title}</div><br />
              <div className="description">
                {formatText(event.description)}
              </div><br   />  
              <div className="regularity">{event.regularity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Events_section;
