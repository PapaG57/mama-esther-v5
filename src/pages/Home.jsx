import React from "react";

function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h2>Bienvenue sur Mama Esther !</h2>
        <p>Un site engagé pour une cause noble.</p>
      </section>

      <section style={styles.about}>
        <h3>Qui sommes-nous ?</h3>
        <p>Découvrez notre mission et nos actions.</p>
      </section>

      {/* <section style={styles.blog}>
        <h3>Nos actualités</h3>
        <p>Explorez les derniers articles.</p>
      </section> */}
    </main>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f3fcf8", // 🔘 Fond gris clair neutre
  },
  hero: {
    color: "#7a7b7c", // 🔘 Texte en noir/gris conventionnel
    padding: "40px",
    fontSize: "20px",
  },
};

export default Home;
