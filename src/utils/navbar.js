import { useEffect } from "react";

const useScrollNavbar = (navbarRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) {
        console.warn("⚠️ La navbar n'a pas été trouvée via le ref !");
        return;
      }

      let scrollY = window.scrollY;

      let opacity = scrollY < 100 ? 1 - (scrollY / 300) * 0.1 : 0.7;

      navbarRef.current.style.setProperty(
        "background-color",
        `rgba(0, 122, 94, ${opacity})`,
        "important"
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);
};

export default useScrollNavbar;
