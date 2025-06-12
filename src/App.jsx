import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Pages from "./pages/Blog";

function App() {
  return (
    <div>
      <Header /> {/* Affichage du Header */}
      <About /> {/* Affichage de la page "À propos" */}
      <Home /> {/* Affichage de la page d'accueil */}
      <Pages /> {/* Affichage des autres pages du site */}
      <Footer /> {/* Affichage du Footer */}
    </div>
  );
}

export default App;
