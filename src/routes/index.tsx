import AboutUsCards from "@/sections/about_us_cards/AboutUsCards"
import AboutUs from "@/sections/about_us/AboutUs"
import ApplicationSection from "@/sections/application/ApplicationSection"
import BigFooterSection from "@/sections/big_footer/BigFooterSection"
import EventsSection from "@/sections/events/EventsSection"
import FrontSection from "@/sections/front_section/FrontSection"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="page-content">
      <FrontSection />
      <AboutUs />
      <AboutUsCards />
      <EventsSection />
      <ApplicationSection />
      <BigFooterSection />
    </div>
  )
}
