import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import ArtPage from './ArtPage.tsx'
import CodePage from './CodePage.tsx'
import OtherPage from "./OtherPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<CodePage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/projects" element={<CodePage />} />
              <Route path="/other" element={<OtherPage />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
