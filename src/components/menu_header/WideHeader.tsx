import "./WideHeader.css"

import HorizontalLogo from "@/components/horizontal_logo/HorizontalLogo"
import * as React from "react"

interface WideHeaderProps {
  isScrolled: boolean
}

const WideHeader: React.FC<WideHeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`wide-menu-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="left">
        <HorizontalLogo expand={false} size={54} />
      </div>
      <nav className="center">
        {/*<a href="/" className="item">*/}
        {/*  Главная*/}
        {/*</a>*/}
        {/*<a href="/community" className="item">*/}
        {/*  Сообщество*/}
        {/*</a>*/}
        {/*<a href="/strategy" className="item">*/}
        {/*  Стратегия*/}
        {/*</a>*/}
        {/*<a href="/faq" className="item">*/}
        {/*  FAQ*/}
        {/*</a>*/}
      </nav>
      <nav className="right">
        {/*<a href="/partnership" className="item">*/}
        {/*  Партнерство*/}
        {/*</a>*/}
        <a href="/#join" className="join-button">
          Вступить
        </a>
        <a href="https://chat.relevanti.org/#/login" className="item">
          Вход
        </a>
      </nav>
    </header>
  )
}

export default WideHeader
