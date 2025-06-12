import { useEffect, useState } from "react";

const useScrollNavbar = (navbarRef) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isAtTopZero = false; // ✅ Suivi de l’état `top: 0px`

    const handleScroll = () => {
      if (!navbarRef.current) return;

      const currentScroll = window.scrollY;

      // 🔽 Scrolling vers le bas → Navbar passe à `top: 0px`
      if (currentScroll > lastScrollY && currentScroll > 100) {
        navbarRef.current.style.top = "0";
        isAtTopZero = true; // ✅ Marque que la navbar est maintenant en `top: 0px`
      }
      // 🔼 Scrolling vers le haut → Navbar reste à `top: 0px` tant qu’on n’est pas en haut
      else if (isAtTopZero) {
        navbarRef.current.style.top = "0";
      }

      // 🏁 Quand on atteint `scrollY = 0`, revient à `top: 60px` et devient plus claire
      if (currentScroll === 0) {
        navbarRef.current.style.top = "60px";
        navbarRef.current.style.backgroundColor = "rgba(0, 122, 94, 0.7)"; // ✅ Version claire
        isAtTopZero = false; // ✅ Réinitialisation de l'état
      } else {
        navbarRef.current.style.backgroundColor = `rgba(0, 122, 94, 1)`; // ✅ Version foncée
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);
};

export default useScrollNavbar;
