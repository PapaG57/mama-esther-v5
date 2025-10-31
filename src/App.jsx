import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Page404 from "./pages/404";
import AboutPage from "./pages/AboutPage";
import NewsletterCarousel from "./components/NewsletterCarousel";
import TravauxEnCours from "./pages/TravauxEnCours";
import Unsubscribe from "./pages/Unsubscribe";
import MentionsLegales from "./pages/MentionsLegales";
import Don from "./pages/Don";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />{" "}
      {/* Force le retour en haut à chaque changement de route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualities" element={<Actuality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/newsletters" element={<NewsletterCarousel />} />
        {/* autres routes */}
        <Route path="/travaux" element={<TravauxEnCours />} />
        {/* Page de désinscription */}
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        {/* Page Mentions Légales */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        {/* 404 */}
        <Route path="*" element={<Page404 />} />
        {/* Page de dons */}
        <Route path="/don" element={<Don />} />
        {/* Page lien mort */}
        <Route path="/lien-mort" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
