import Header from "@/components/menu_header/Header"
import PageTransition from "@/components/PageTransition"
import { createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <PageTransition />
      <TanStackRouterDevtools />
    </>
  ),
})
