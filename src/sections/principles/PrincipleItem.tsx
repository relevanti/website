import "./PrincipleItem.css"

import { ReactNode } from "react"

interface PrincipleItemProps {
  children: ReactNode
}

export default function PrincipleItem({ children }: PrincipleItemProps) {
  return <div className="principle-item">{children}</div>
}
