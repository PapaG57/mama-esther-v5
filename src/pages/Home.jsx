import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Engagement from "./Engagement";
import ActualitySection from "../components/ActualitySection";
import NewsletterCarousel from "../components/NewsletterCarousel";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DonationCounter from "../components/DonationCounter";
import { useTranslation } from "react-i18next";
import Divider from "../components/Divider";

import "../styles/home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="home-content">
        <Header />
        <AboutSection />
        <Engagement />
        <ActualitySection />

        {/* Section Newsletters */}
        <section className="home-newsletter-section">
          <h2>{t("actuality.pdfTitle")}</h2>
          <p>{t("actuality.pdfText")}</p>
          <NewsletterCarousel />
          <Divider />
        </section>

        <DonationCounter />
      </main>
      <ScrollToTopButton /> {/* Bouton flottant intégré */}
    </>
  );
}
