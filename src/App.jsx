import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Engagement from "./pages/Engagement";
import Actuality from "./pages/Actuality";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Routes>
          {/* Page d’accueil : exactement tes trois sections existantes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Engagement />
                <Actuality />
              </>
            }
          />

          {/* Nouvelle page À propos (carrousel + texte) */}
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Pied de page commun */}
        <Footer />
      </div>
    </Router>
  );
}
