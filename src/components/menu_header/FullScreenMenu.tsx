import "./FullScreenMenu.css"

import { Link } from "@tanstack/react-router"
import * as React from "react"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`full-screen-menu ${isOpen ? "open" : ""}`}>
      <nav className="full-screen-nav">
        <Link to="/" className="item" onClick={onClose}>
          Главная
        </Link>
        <Link to="/community" className="item" onClick={onClose}>
          Сообщество
        </Link>
        <Link to="/strategy" className="item" onClick={onClose}>
          Стратегия
        </Link>
        <Link to="/question" className="item" onClick={onClose}>
          FAQ
        </Link>
        {/*<Link to="/partnership" className="item" onClick={onClose}>*/}
        {/*  Партнерство*/}
        {/*</Link>*/}

        <div className="join-button-container">
          <a
            href="https://chat.relevanti.org/#/login"
            className="login-button"
            onClick={onClose}
          >
            Вход
          </a>
          <Link to="/" hash="join" className="join-button" onClick={onClose}>
            Вступить
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default FullScreenMenu
