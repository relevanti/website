import "./Question.css"

import React, { useState } from "react"

interface QuestionItem {
  title: string
  body: string
}

const Question: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const questionData: QuestionItem[] = [
    {
      title: "На сколько людей рассчитано сообщество?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title: "А можно с котом?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title: "Как вступить?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title: "Почему это бесплатно?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title: "Какие требования к участникам?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title:
        "Еще какой нибудь вопрос, очень очень длинный такой вопрос чтобы не влез в одну строчку?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
    {
      title: "Короткий, но крайне мудрый вопрос?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar massa vitae imperdiet sodales. Proin a risus ac lorem aliquam tempus.",
    },
  ]

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = (): void => {
    setHoveredIndex(null)
  }

  return (
    <div className="question-container">
      <h1 className="question-title">Вопросы и ответы</h1>

      <div className="question-list">
        {questionData.map((item: QuestionItem, index: number) => (
          <div
            key={index}
            className={`question-item ${hoveredIndex === index ? "question-item-hover" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`question-button ${hoveredIndex === index ? "question-button-hover" : ""}`}
              onFocus={(e) => {
                e.currentTarget.classList.add("question-button-focus")
              }}
              onBlur={(e) => {
                e.currentTarget.classList.remove("question-button-focus")
              }}
            >
              <span className="question-text">{item.title}</span>
              <span
                className={`toggle-icon ${openIndex === index ? "toggle-icon-active" : ""}`}
              >
                +
              </span>
            </button>

            <div
              className={`answer-container ${openIndex === index ? "answer-container-active" : ""}`}
            >
              <div className="answer-content">
                <div className="answer-divider">
                  <p className="answer-text">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
