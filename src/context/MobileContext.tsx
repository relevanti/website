import useIsMobile from "@/hooks/useIsMobile"
import * as React from "react"
import { ReactNode, createContext, useContext } from "react"

const MobileContext = createContext<boolean>(false)

interface MobileProviderProps {
  children: ReactNode
}

export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const isMobile = useIsMobile()
  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  )
}

export const useMobile = () => useContext(MobileContext)
