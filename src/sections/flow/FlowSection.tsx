import FlowUp from "./FlowUp"

export const FlowSection = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "Black",
          fontWeight: "bold",
          marginTop: "8px",
        }}
      >
        Пути развития целей
      </h1>
      <section className="flow-section" id="flow-up">
        <h2>Flow Up</h2>
        <FlowUp />
      </section>
    </div>
  )
}
