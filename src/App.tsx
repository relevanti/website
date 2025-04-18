import "./App.css"

import EventsSection from "@/sections/events/EventsSection"
import React from "react"

import Header from "./components/menu_header/Header"
import { MobileProvider } from "./context/MobileContext"
import AboutUsCards from "./sections/about_us_cards/AboutUsCards"
import AboutUs from "./sections/about_us/AboutUs"
import FooterSection from "./sections/footer/FooterSection"
import FrontSection from "./sections/front_section/FrontSection"

const App: React.FC = () => {
  return (
    <MobileProvider>
      <div>
        <Header />
        <FrontSection />
        <AboutUs />
        <AboutUsCards />
        <EventsSection />
        <FooterSection />
      </div>
    </MobileProvider>
  )
}

export default App
