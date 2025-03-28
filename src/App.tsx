import "./App.css"

import React from "react"

import { MobileProvider } from "./context/MobileContext"
import FakeContent from "./sections/fake_content/FakeContent"

const App: React.FC = () => {
  return (
    <MobileProvider>
      <div>
        <FakeContent />
      </div>
    </MobileProvider>
  )
}

export default App
