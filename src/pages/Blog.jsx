import React from "react";

function Blog() {
  return (
    <section style={styles.container}>
      <h2>Nos Actualités</h2>
      <p>Découvrez les derniers articles et mises à jour.</p>
      <div style={styles.posts}>
        <div style={styles.post}>
          <h3>Événement caritatif 2025</h3>
          <p>Une journée solidaire pour soutenir les plus démunis.</p>
        </div>
        <div style={styles.post}>
          <h3>Projet éducatif pour les enfants</h3>
          <p>Accès à l’éducation pour tous grâce à nos actions.</p>
        </div>
      </div>
    </section>
  );
}

// ✅ Styles sobres et épurés
const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#333",
  },
  posts: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  post: {
    backgroundColor: "#d9d9d9", // Gris clair pour les cartes
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
};

export default Blog;
