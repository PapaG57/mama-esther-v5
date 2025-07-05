import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import ScrollToTop from "./utils/ScrollToTop"; // 🆕 Import du composant
import Page404 from "./pages/404";

function App() {
  return (
    <Router>
      <ScrollToTop />{" "}
      {/* 🆕 Force le retour en haut à chaque changement de route */}
      {/* Routes du site */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualites" element={<Actuality />} />
        {/* 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
