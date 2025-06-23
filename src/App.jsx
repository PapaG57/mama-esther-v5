// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TeamCarousel from "./pages/TeamCarousel";
import Actuality from "./pages/Actuality";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamCarousel />} />
        <Route path="/actuality" element={<Actuality />} />
      </Routes>
      <Footer />
    </Router>
  );
}
