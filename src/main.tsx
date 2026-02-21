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
import PiecesPage from "./PiecesPage.tsx";
import PiecesTextilePage from "./components/pieces/TextilePage.tsx";
import PiecesSculpturesPage from "./components/pieces/SculpturesPage.tsx";
import PiecesOrigamiPage from "./components/pieces/OrigamiPage.tsx";
import Pieces3DModelsPage from "./components/pieces/3DModelsPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/projects" element={<CodePage />} />
              <Route path="/pieces" element={<PiecesPage />} />
              <Route path="/pieces/textile" element={<PiecesTextilePage />} />
              <Route path="/pieces/sculptures" element={<PiecesSculpturesPage />} />
              <Route path="/pieces/origami" element={<PiecesOrigamiPage />} />
              <Route path="/pieces/3D" element={<Pieces3DModelsPage />} />
              <Route path="/qualia" element={<QualiaPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
      </HashRouter>
  </StrictMode>,
)
