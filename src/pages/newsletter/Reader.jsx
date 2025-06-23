import { useParams } from "react-router-dom";

export default function Reader() {
  const { id } = useParams();
  const srcPath = `/assets/newsletter-pdf/news${id}/news${id}.html`;

  return (
    <main style={{ padding: "40px 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Lecture de la newsletter n°{id}
      </h1>
      <iframe
        src={srcPath}
        style={{ width: "100%", height: "80vh", border: "1px solid #ccc" }}
        title={`Newsletter ${id}`}
      />
    </main>
  );
}
