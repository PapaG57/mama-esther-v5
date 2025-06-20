import React from "react";
import "../styles/about-section.css";
import TeamCarousel from "./TeamCarousel";
import CamerounButton from "../components/CamerounButton";

export default function AboutPage() {
  return (
    <main className="about-page">
      <TeamCarousel />
    </main>
  );
}
