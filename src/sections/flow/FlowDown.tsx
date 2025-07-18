import "reactflow/dist/style.css"

import ReactFlow from "reactflow"

import { CustomTextNode, CustomTextNode2 } from "./CustomTextNode"
import {
  desktopEdges,
  desktopNodes,
  mobileEdges,
  mobileNodes,
} from "./nodes/nodesDown"
import { useIsMobile } from "./useIsMobile"

const nodeTypes = {
  customText: CustomTextNode,
  customText2: CustomTextNode2,
}

const FlowDown = () => {
  const isMobile = useIsMobile()
  const nodes = isMobile ? mobileNodes : desktopNodes
  const edges = isMobile ? mobileEdges : desktopEdges

  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100vw",
        height: "130vh",
        backgroundColor: "#fffff",
        padding: "10px",
      }}
    >
      <div style={{ width: "80%", height: "90%" }}>
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

export default FlowDown
