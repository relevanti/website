import "./HorizontalLogo.css"

import React from "react"

interface HorizontalLogoProps {
  expand: boolean
  size: number
}

const HorizontalLogo: React.FC<HorizontalLogoProps> = ({ expand, size }) => {
  return (
    <div className={`horizontal-logo ${expand ? "expand" : "tight"}`}>
      <img
        src="/logo_no_text_no_rays.svg"
        alt="Logo"
        className="logo-image"
        style={{ width: size }}
      />
      <span className="logo-text">RELEVANTI</span>
    </div>
  )
}

export default HorizontalLogo
