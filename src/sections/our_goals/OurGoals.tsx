import "./OurGoals.css"

import React from "react"

import VennDiagram from "./VennDiagram"

const OurGoals: React.FC = () => {
  return (
    <div className="our-goals-container">
      <div className="our-goals-header">
        <h1>Наши цели</h1>
        <ul className="our-goals-list">
          <li>
            Умножать ресурсы через кооперацию, а не тратить на конкуренцию
          </li>
          <li>Быть богатыми, здоровыми, и счастливыми</li>
          <li>
            Реализовать амбиции, выходящие за рамки возможностей одного человека
          </li>
        </ul>
      </div>

      <div className="our-goals-diagram">
        <VennDiagram />
      </div>

      <div className="our-goals-footer">
        <p>
          Это задачи, с решения которых мы начнем. Хотя мы и мечтаем о высоком,
          мы хорошо понимаем, что самые высокие задачи требуют самых прочных
          фундаментов. Наша цель - вместе построить эту универсальное основание.
        </p>
        <p>А долгосрочные жизненные цели участников могут быть разными.</p>
      </div>
    </div>
  )
}

export default OurGoals
