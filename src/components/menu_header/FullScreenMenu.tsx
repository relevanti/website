import "./FullScreenMenu.css"

import React from "react"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`full-screen-menu ${isOpen ? "open" : ""}`}>
      <nav className="full-screen-nav">
        <a href="/" className="menu-header-item" onClick={onClose}>
          Главная
        </a>
        <a href="/community" className="menu-header-item" onClick={onClose}>
          Сообщество
        </a>
        <a href="/strategy" className="menu-header-item" onClick={onClose}>
          Стратегия
        </a>
        <a href="/faq" className="menu-header-item" onClick={onClose}>
          FAQ
        </a>
        <a href="/partnership" className="menu-header-item" onClick={onClose}>
          Партнерство
        </a>

        <div className="join-button-container">
          <a
            href="https://chat.relevanti.org/#/login"
            className="login-button"
            onClick={onClose}
          >
            Вход
          </a>
          <a href="/#join" className="join-button" onClick={onClose}>
            Вступить
          </a>
        </div>
      </nav>
    </div>
  )
}

export default FullScreenMenu
