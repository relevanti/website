import "./App.css"

import React from "react"

import Header from "./components/menu_header/Header"
import { MobileProvider } from "./context/MobileContext"
import FakeContent from "./sections/fake_content/FakeContent"
import HowToJoin from "./sections/HowToJoin/HowToJoin"

const App: React.FC = () => {
  return (
    <MobileProvider>
      <div>
        <Header />
        <FakeContent />
        
      </div>
      <HowToJoin />
    </MobileProvider>
  )
}

export default App
