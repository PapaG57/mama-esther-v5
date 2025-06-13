import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Engagement from "./pages/Engagement";
import Actuality from "./pages/Actuality";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header /> {/* Affichage du Header */}
      <About /> {/* Affichage de la page "À propos" */}
      <Engagement /> {/* Affichage de la page des engagements */}
      <Actuality /> {/* Affichage des actualités de l'association */}
      <Footer /> {/* Affichage du Footer */}
    </div>
  );
}

export default App;
