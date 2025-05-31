import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Mama Esther. Tous droits réservés.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#CE1126", // 🔴 Rouge du drapeau
    color: "#fff", // Texte en blanc pour meilleure lisibilité
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
  },
};

export default Footer;
