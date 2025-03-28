import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Events_section from './sections/Events_section.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Events_section />
  </StrictMode>,
)
