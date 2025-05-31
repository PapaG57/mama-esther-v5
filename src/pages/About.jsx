import React from "react";

function About() {
  return (
    <section style={styles.container}>
      <h2>À propos de Mama Esther</h2>
      <p>
        Mama Esther est une initiative engagée qui œuvre pour le bien-être des
        communautés. Notre mission est d'accompagner, soutenir et inspirer !
      </p>
    </section>
  );
}

// ✅ Styles légers pour rester sobre
const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#fff", // 🔘 Fond blanc neutre
    color: "#333", // 🔘 Texte classique gris foncé
  },
};

export default About;
