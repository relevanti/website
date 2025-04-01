import "./MenuToggleButton.css"

import React from "react"

interface MenuToggleButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button className={`menu-toggle-button ${className}`} onClick={onClick}>
      <div className={`line top ${isOpen ? "open" : ""}`}></div>
      <div className={`line middle ${isOpen ? "open" : ""}`}></div>
      <div className={`line bottom ${isOpen ? "open" : ""}`}></div>
    </button>
  )
}

export default MenuToggleButton
