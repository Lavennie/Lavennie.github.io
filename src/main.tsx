import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import './index.css'
import HomePage from "./HomePage.tsx";
import ArtPage from './ArtPage.tsx'
import CodePage from './CodePage.tsx'
import QualiaPage from "./QualiaPage.tsx";
import TimelinePage from "./TimelinePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/projects" element={<CodePage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/qualia" element={<QualiaPage />} />
          </Routes>
      </HashRouter>
  </StrictMode>,
)
