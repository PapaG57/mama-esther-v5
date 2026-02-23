import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/Divider";
import CamerounButton from "../components/CamerounButton";
import Registration from "../components/Registration";
import NewsletterCarousel from "../components/NewsletterCarousel";
import "../styles/actuality.css";

export default function Actuality() {
  const newsData = [
    {
      id: 1,
      image: "/assets/actualities/actuality2.png",
      date: "2024-09-01",
      title: "Signature des documents pour l'agrément",
      description: `"C'est un jour mémorable pour l'association Mama Esther. Aujourd'hui, la création de l'association a été officiellement reconnue par le tribunal de Thionville en Moselle, marquant le début d'un nouveau chapitre dans la mission de cette organisation philanthropique.\n\n Les membres de l'association et les sympathisants attendaient avec impatience cette nouvelle depuis des mois. Lorsque les documents officiels sont arrivés par courrier, une onde de joie et de soulagement a parcouru l'équipe. La présidente de l'association, Esther Gérard, a tenu à annoncer la bonne nouvelle à tous les membres et bénévoles. \n\nNous avons travaillé sans relâche pour atteindre ce moment,déclara Esther Gérard, visiblement émue. Recevoir ces documents officiels est une reconnaissance de notre engagement et de nos efforts. C'est le début d'une aventure pleine de promesses pour les enfants que nous soutenons. \n\nLa signature des documents par le tribunal de Thionville symbolise bien plus qu'une simple formalité juridique. C'est le fruit d'années de travail acharné, de dévouement et de soutien inconditionnel de la part de nombreux bénévoles et sympathisants. Chaque membre de l'association a contribué à sa manière à cette réalisation. \n\nLa réception des documents officiels marque le début d'un nouveau voyage pour l'association Mama Esther, un voyage empreint de compassion, de détermination et d'espoir. Chaque membre de l'association est désormais prêt à se retrousser les manches et à transformer cette vision en réalité, offrant un avenir meilleur aux enfants et aux personnes vulnérables. \n\nle Webmaster"`,
    },
    {
      id: 2,
      image: "/assets/actualities/actuality1.png",
      date: "20 octobre 2024",
      title: "Visite du terrain de l'association",
      description: `"Le soleil brillait doucement sur le vaste terrain, soulignant l'enthousiasme et l'espoir qui imprégnaient l'air. Aujourd'hui, une étape cruciale dans le projet de l'association Mama Esther allait prendre forme. La présidente de l'association, Madame Esther GERARD, était sur place pour visiter le terrain destiné à accueillir le futur bâtiment de l'orphelinat, un projet qui promet de transformer de nombreuses vies. Le terrain, actuellement une étendue de terre vaste et ouverte, était en passe de devenir un havre pour les enfants dans le besoin. L'association Mama Esther, connue pour son engagement envers le bien-être des enfants orphelins et les personnes vulnérables, avait travaillé sans relâche pour commencer la construction de ce nouvel établissement. \n\nTout en marchant à travers le terrain, la présidente prit le temps de discuter avec les membres de la communauté locale, écoutant leurs idées et leurs suggestions avec une attention bienveillante. 'Ce projet n'est pas seulement celui de l'association 'Mama Esther' déclara-t-elle. Il appartient à chacun de nous. Ensemble, nous bâtissons un avenir meilleur pour ces enfants, en leur offrant non seulement un toit, mais aussi un foyer où ils pourront s'épanouir. \n\nLa présidente de l'association 'Mama Esther' quitta le terrain avec le cœur rempli d'espoir et d'enthousiasme, prête à continuer de travailler sans relâche pour que ce rêve devienne réalité. La visite d'aujourd'hui était bien plus qu'une simple inspection ; elle symbolisait la concrétisation d'une vision, portée par une communauté unie par un même objectif : offrir un foyer sûr et aimant aux enfants qui en ont le plus besoin. \n\nLe Webmaster"`,
    },
    {
      id: 3,
      image: "/assets/actualities/actuality3.png",
      date: "1er avril 2025",
      title: "Premier coup de pelle !",
    },
  ];

  const itemsPerPage = 2;
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pour scroller vers une ancre comme #news2 si présente dans l'URL
  useEffect(() => {
    const anchor = location.hash?.replace("#", "");
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Laisse le DOM se charger
    }
  }, [location]);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const visibleNews = newsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const goToPage = (p) => setPage(Math.max(1, Math.min(totalPages, p)));

  const formatDateParts = (dateString) => {
    if (!dateString) return { day: "", month: "", year: "" };
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const [day, month, year] = date
      .toLocaleDateString("fr-FR", options)
      .replace(",", "")
      .split(" ");
    return {
      day: day === "1" ? "1er" : day.padStart(2, "0"),
      month,
      year,
    };
  };

  return (
    <main className="actuality-page">
      <div className="actuality-header">
        <img
          src="/assets/actualities/news.png"
          alt="Bannière Actualités"
          className="actuality-banner"
        />
        <h1 className="actuality-title-overlay">Nos actualités en images</h1>
      </div>

      <Divider />

      <div className="actuality-content-row">
        <section className="news-list">
          {visibleNews.map((news) => {
            const { day, month, year } = formatDateParts(news.date);
            return (
              <div key={news.id} id={`news${news.id}`} className="news-card">
                <div className="news-image-wrapper">
                  <img src={news.image} alt={news.title} />
                  <div className="news-date-box">
                    <div className="news-day">{day}</div>
                    <div className="news-month">{month}</div>
                    <div className="news-year">{year}</div>
                  </div>
                  <h3 className="news-title">{news.title}</h3>
                </div>
                <div className="news-description">
                  {(news.description || "").split("\n\n").map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Bloc jaune droite */}
        <aside className="aside-inline">
          <div className="aside-card-text">
            <h2>inscrivez-vous</h2>
            <p>
              Inscrivez-vous à notre newsletter pour rester informé des
              dernières nouvelles et événements de l'association.
            </p>
            <br />
            <CamerounButton onClick={() => setShowModal(true)}>
              je m'inscris
            </CamerounButton>
          </div>

          <div className="aside-card-text">
            <h2>newsletter</h2>
            <p>
              Les liens pour lire les newsletter sont à la fin de cette page.
              Cliquer sur les logos format PDF 😉!
            </p>
          </div>
        </aside>
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(1)} disabled={page === 1}>
          &laquo;
        </button>
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
          &lsaquo;
        </button>
        <span>
          Page {page} sur {totalPages}
        </span>
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          &rsaquo;
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          disabled={page === totalPages}
        >
          &raquo;
        </button>
      </div>

      <Divider />

      {/* Newsletters en pdf */}
      <section id="pdf" className="newsletter-section">
        <h2>Les temps forts de l’association</h2>
        <p>
          Retrouvez ici nos newsletters passées. Vous pouvez les consulter en
          version web ou télécharger le PDF directement.
        </p>

        <NewsletterCarousel />
      </section>

      <Registration isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Bouton retour fixé en bas à droite */}
      <div className="fixed-bottom-right">
        <CamerounButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faHandPointLeft}
            style={{ marginRight: "8px" }}
          />
          Retour
        </CamerounButton>
      </div>
    </main>
  );
}
