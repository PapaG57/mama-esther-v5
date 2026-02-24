import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/Divider";
import CamerounButton from "../components/CamerounButton";
import Registration from "../components/Registration";
import NewsletterCarousel from "../components/NewsletterCarousel";
import { useTranslation } from "react-i18next";
import "../styles/actuality.css";

export default function Actuality() {
  const { t, i18n } = useTranslation();

  const newsData = [
    {
      id: 1,
      image: "/assets/actualities/actuality2.png",
      date: "2024-09-01",
      titleKey: "actuality.articles.article1.title",
      descKey: "actuality.articles.article1.content",
    },
    {
      id: 2,
      image: "/assets/actualities/actuality1.png",
      date: "2024-10-20",
      titleKey: "actuality.articles.article2.title",
      descKey: "actuality.articles.article2.content",
    },
    {
      id: 3,
      image: "/assets/actualities/actuality3.png",
      date: "2025-04-01",
      titleKey: "actuality.articles.article3.title",
    },
  ];

  const itemsPerPage = 2;
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const anchor = location.hash?.replace("#", "");
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
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
    const lang = i18n.language === "fr" ? "fr-FR" : "en-GB";
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatted = date.toLocaleDateString(lang, options).replace(",", "");
    const parts = formatted.split(" ");
    
    let day = parts[0];
    if (i18n.language === "fr" && day === "1") day = "1er";
    else if (i18n.language !== "fr") day = day.padStart(2, "0");

    return {
      day: day,
      month: parts[1],
      year: parts[2],
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
        <h1 className="actuality-title-overlay">
          {t("actuality.title")}
        </h1>
      </div>

      <Divider />

      <div className="actuality-content-row">
        <section className="news-list">
          {visibleNews.map((news) => {
            const { day, month, year } = formatDateParts(news.date);
            return (
              <div key={news.id} id={`news${news.id}`} className="news-card">
                <div className="news-image-wrapper">
                  <img src={news.image} alt={t(news.titleKey)} />
                  <div className="news-date-box">
                    <div className="news-day">{day}</div>
                    <div className="news-month">{month}</div>
                    <div className="news-year">{year}</div>
                  </div>
                  <h3 className="news-title">{t(news.titleKey)}</h3>
                </div>
                <div className="news-description">
                  {(news.descKey ? t(news.descKey) : "").split("\n\n").map((para, index) => (
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
            <h2>{t("actuality.subscribeTitle")}</h2>
            <p>{t("actuality.subscribeText")}</p>
            <br />
            <CamerounButton onClick={() => setShowModal(true)}>
              {t("actuality.subscribeButton")}
            </CamerounButton>
          </div>

          <div className="aside-card-text">
            <h2>{t("actuality.newsletterTitle")}</h2>
            <p>{t("actuality.newsletterText")}</p>
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
          {t("actuality.pagination", { current: page, total: totalPages })}
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
        <h2>{t("actuality.pdfTitle")}</h2>
        <p>{t("actuality.pdfText")}</p>

        <NewsletterCarousel />
      </section>

      <Registration isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Bouton retour */}
      <div className="fixed-bottom-right">
        <CamerounButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faHandPointLeft}
            style={{ marginRight: "8px" }}
          />
          {t("actuality.back")}
        </CamerounButton>
      </div>
    </main>
  );
}
