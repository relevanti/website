import "reactflow/dist/style.css"

import ReactFlow from "reactflow"

import { CustomTextNode, CustomTextNode2 } from "./CustomTextNode"
import {
  desktopEdges,
  desktopNodes,
  mobileEdges,
  mobileNodes,
} from "./nodes/nodesCenter"
import { useIsMobile } from "./useIsMobile"

const nodeTypes = {
  customText: CustomTextNode,
  customText2: CustomTextNode2,
}

const FlowCenter = () => {
  const isMobile = useIsMobile()
  const nodes = isMobile ? mobileNodes : desktopNodes
  const edges = isMobile ? mobileEdges : desktopEdges

  const desktopStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff",
    padding: "10px",
  }

  const mobileStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90vw",
    height: "130vh",
    backgroundColor: "#ffffff",
    padding: "10px",
  }

  return (
    <div style={isMobile ? mobileStyle : desktopStyle}>
      <div style={{ width: isMobile ? "100%" : "80%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={{
            type: "step",
            style: { strokeWidth: 2 },
          }}
          fitView
        />
      </div>
    </div>
  )
}

export default FlowCenter
