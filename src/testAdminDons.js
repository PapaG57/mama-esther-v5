// src/testAdminDons.js

export async function testAdminDons() {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    console.error("Token admin introuvable dans localStorage");
    return;
  }

  try {
    const response = await fetch("/api/admin/dons", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erreur d'accès :", data.error || "Erreur inconnue");
    } else {
      console.log("✅ Accès autorisé :", data);
    }
  } catch (err) {
    console.error("Erreur réseau :", err);
  }
}