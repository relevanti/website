import { useEffect } from "react"

import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/apply")({
  component: () => {
    useEffect(() => {
      const base = "https://forms.gle/1sfCgMKZgpaAAcpT9"
      const url = new URL(base)
      if (window.location.search) url.search = window.location.search
      if (window.location.hash) url.hash = window.location.hash
      window.location.replace(url.toString())
    }, [])
    return null
  },
})
