import { useEffect } from "react";

const useScrollNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");

      if (!navbar) {
        console.warn("⚠️ La navbar n'a pas été trouvée !");
        return;
      }

      let scrollY = window.scrollY;
      let opacity = Math.max(0.5, 1 - scrollY / 300);
      navbar.style.backgroundColor = `rgba(0, 122, 94, ${opacity})`;
    };

    // Attendre le chargement complet du DOM avant d'ajouter l'événement
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("scroll", handleScroll);
    });

    // Nettoyage de l'écouteur au démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollNavbar;
