import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArtPage from './ArtPage.tsx'
import CodePage from './CodePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodePage />
  </StrictMode>,
)
