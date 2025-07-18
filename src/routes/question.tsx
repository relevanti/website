import JuicyHeader from "@/components/juicy_header/JuicyHeader"
import BigFooterSection from "@/sections/big_footer/BigFooterSection"
import Question from "@/sections/question/Question"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/question")({
  component: Community,
})

function Community() {
  return (
    <div className="page-content">
      <JuicyHeader
        backgroundImage="/images/faq.webp"
        backgroundPosition="center 40%"
        title="FAQ"
      />
      <Question />
      <BigFooterSection />
    </div>
  )
}
