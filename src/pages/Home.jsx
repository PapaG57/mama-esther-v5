import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Engagement from "./Engagement";
import ActualitySection from "../components/ActualitySection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DonationCounter from "../components/DonationCounter";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="home-content">
        <Header />
        <AboutSection />
        <Engagement />
        <ActualitySection />
        <DonationCounter />
      </main>
      <ScrollToTopButton /> {/* Bouton flottant intégré */}
    </>
  );
}
