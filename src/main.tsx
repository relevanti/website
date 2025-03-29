import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FooterSection from './sections/FooterSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FooterSection />
  </StrictMode>,
)
