import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TeamCarousel from "./pages/TeamCarousel";
import Actuality from "./pages/Actuality";
import Footer from "./components/Footer";

// Composant englobant pour détecter la route actuelle
function AppWrapper() {
  // Footer affiché sur toutes les pages désormais
  const hideFooter = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamCarousel />} />
        <Route path="/actuality" element={<Actuality />} />
        {/* ... autres routes si besoin */}
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

// Router principal
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
