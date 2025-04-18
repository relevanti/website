import "./ThinHeader.css"

import * as React from "react"
import { useState } from "react"

import FullScreenMenu from "./FullScreenMenu"
import MenuToggleButton from "./MenuToggleButton"

interface ThinHeaderProps {
  isScrolled: boolean
}

const ThinHeader: React.FC<ThinHeaderProps> = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header
      className={`thin-menu-header ${isScrolled || menuOpen ? "scrolled" : ""}`}
    >
      <img
        src="/logo_no_text_no_rays.svg"
        alt="Logo"
        className="logo-image left"
      />
      <span className="logo-text center">RELEVANTI</span>
      <MenuToggleButton isOpen={menuOpen} onClick={toggleMenu} />
      <FullScreenMenu isOpen={menuOpen} onClose={toggleMenu} />
    </header>
  )
}

export default ThinHeader
