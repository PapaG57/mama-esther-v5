import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Page404 from "./pages/404";
import AboutPage from "./pages/AboutPage";

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
        {/* 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
