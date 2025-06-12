import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header /> {/* Affichage du Header */}
      <About /> {/* Affichage de la page "À propos" */}
      <Home /> {/* Affichage de la page d'accueil */}
      <Actuality /> {/* Affichage des actualités de l'association */}
      <Footer /> {/* Affichage du Footer */}
    </div>
  );
}

export default App;
