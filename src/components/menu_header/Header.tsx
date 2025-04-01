import "./Header.css"

import useIsMobile from "@/hooks/useIsMobile"
import React, { useEffect, useState } from "react"

const Header: React.FC = () => {
  const isMobile = useIsMobile()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const firstSectionHeight = window.innerHeight // Assuming first section is full screen height
      setIsScrolled(scrollPosition > firstSectionHeight / 2)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`menu-header ${isScrolled ? "scrolled" : ""} ${isMobile ? "mobile" : ""}`}
    >
      <div className="left">
        <a href="/" className="logo-link">
          <div className="logo">
            <img
              src="/logo_no_text_no_rays.svg"
              alt="Logo"
              className="logo-image"
            />
            RELEVANTI
          </div>
        </a>
      </div>
      {!isMobile && (
        <div className="center">
          <nav className="center-menu">
            <a href="/">Главная</a>
            <a href="/community">Сообщество</a>
            <a href="/strategy">Стратегия</a>
            <a href="/faq">FAQ</a>
          </nav>
        </div>
      )}
      {!isMobile && (
        <div className="right">
          <div className="right-menu">
            <a href="/partnership">Партнерство</a>
            <a href="/#join" className="join-button">
              Вступить
            </a>
            <a href="https://chat.relevanti.org/#/login">Вход</a>
          </div>
        </div>
      )}
      {isMobile && <button className="hamburger-menu">☰</button>}
    </header>
  )
}

export default Header
