import "./PageTransition.css"

import { Outlet } from "@tanstack/react-router"
import * as React from "react"

const PageTransition: React.FC = () => {
  return (
    <div className={`page-transition`}>
      <Outlet />
    </div>
  )
}

export default PageTransition
