import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TeamCarousel from "./pages/TeamCarousel";
import Actuality from "./pages/Actuality";
import NewsletterReader from "./pages/newsletters/Reader";

import Footer from "./components/Footer";

// Composant englobant pour détecter la route actuelle
function AppWrapper() {
  const location = useLocation();

  // On masque le footer sur les pages /newsletter/:id
  const hideFooter = /^\/newsletter\/\d+$/.test(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamCarousel />} />
        <Route path="/actuality" element={<Actuality />} />
        <Route path="/newsletter/:id" element={<NewsletterReader />} />
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
