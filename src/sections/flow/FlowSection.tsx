import FlowCenter from "./FlowCenter"
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
      <section
        className="flow-section"
        id="flow-up"
        style={{ marginTop: "30px" }}
      >
        <FlowUp />
      </section>
      <section
        className="flow-section"
        id="flow-center"
        style={{ marginTop: "-400px" }}
      >
        <FlowCenter />
      </section>
    </div>
  )
}
