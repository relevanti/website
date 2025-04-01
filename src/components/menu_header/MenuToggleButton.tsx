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
      {isOpen ? "✕" : "☰"}
    </button>
  )
}

export default MenuToggleButton
