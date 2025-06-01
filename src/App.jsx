import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Blog";

function App() {
  return (
    <div>
      <Header /> {/* Affichage du Header */}
      <Home /> {/* Affichage de la page d'accueil */}
      <About /> {/* Affichage de la page "À propos" */}
      <Pages /> {/* Affichage des autres pages du site */}
      <Footer /> {/* Affichage du Footer */}
    </div>
  );
}

export default App;
