import React, { useState, useEffect, useCallback, useRef } from "react";
import CamerounButton from "../components/CamerounButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../styles/teamCarousel.css";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    id: "esther",
    name: "Eshter GERARD",
    roleKey: "team.roles.president",
    img: "/assets/team/esther.png",
    descKey: "team.descriptions.esther",
  },
  {
    id: "florent",
    name: "Florent GERARD",
    roleKey: "team.roles.vicePresident",
    img: "/assets/team/florent.png",
    descKey: "team.descriptions.florent",
  },
  {
    id: "maeva",
    name: "Maeva DAHER-KHATER",
    roleKey: "team.roles.treasurer",
    img: "/assets/team/maeva.png",
    descKey: "team.descriptions.maeva",
  },
  {
    id: "aziz",
    name: "Aziz DAHER-KHATER",
    roleKey: "team.roles.logistics",
    img: "/assets/team/aziz.png",
    descKey: "team.descriptions.aziz",
  },
  {
    id: "margault",
    name: "Margault WILLEMS",
    roleKey: "team.roles.nurse",
    img: "/assets/team/margault.png",
    descKey: "team.descriptions.margault",
  },
  {
    id: "marie",
    name: "Marie JADDAOUI",
    roleKey: "team.roles.nurse",
    img: "/assets/team/marie.png",
    descKey: "team.descriptions.marie",
  },
  {
    id: "melanie",
    name: "Melanie LOPES",
    roleKey: "team.roles.nurse",
    img: "/assets/team/melanie.png",
    descKey: "team.descriptions.melanie",
  },
  {
    id: "jules",
    name: "Jules BILLONG",
    roleKey: "team.roles.admin",
    img: "/assets/team/jules.png",
    descKey: "",
  },
  {
    id: "odette",
    name: "Odette NGO BIHAÏ",
    roleKey: "team.roles.projectManager",
    img: "/assets/team/odette.png",
    descKey: "",
  },
  {
    id: "jane",
    name: "Jane DOE",
    roleKey: "team.roles.socialMedia",
    img: "/assets/team/jane-doe.png",
    descKey: "",
  },
];

export default function TeamCarousel() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touch = useRef({ startX: 0, endX: 0 });

  const goTo = useCallback(
    (delta) => {
      if (animating) return;
      setAnimating(true);
      setIndex(
        (prev) => (prev + delta + teamMembers.length) % teamMembers.length
      );
      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goTo]);

  const onTouchStart = (e) => {
    touch.current.startX = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    touch.current.endX = e.changedTouches[0].screenX;
    const delta = touch.current.startX - touch.current.endX;
    if (Math.abs(delta) > 50) goTo(delta > 0 ? 1 : -1);
  };

  const positionClass = (i) => {
    const offset = (i - index + teamMembers.length) % teamMembers.length;
    if (offset === 0) return "center";
    if (offset === 1) return "right-1";
    if (offset === 2) return "right-2";
    if (offset === teamMembers.length - 1) return "left-1";
    if (offset === teamMembers.length - 2) return "left-2";
    return "hidden";
  };

  return (
    <>
      <main className="team-page">
        <h1 className="about-title green-box glow-outline">{t("team.title")}</h1>
        <p className="carousel-hint flashy">
          {t("team.hint")}
        </p>
        <div
          className="carousel-container"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="nav-arrow left" onClick={() => goTo(-1)}>
            ‹
          </button>

          <div className="carousel-track">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`card ${positionClass(i)}`}
                onClick={() => {
                  setActiveMember(member);
                  setShowModal(true);
                }}
              >
                <img src={member.img} alt={member.name} />
              </div>
            ))}
          </div>

          <button className="nav-arrow right" onClick={() => goTo(1)}>
            ›
          </button>
        </div>

        <div className="member-info">
          <h2 className="member-name">{teamMembers[index].name}</h2>
          <p className="member-role">{t(teamMembers[index].roleKey)}</p>
        </div>

        <div className="dots">
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i - index)}
            />
          ))}
        </div>
        <div className="floating-contact">
          <CamerounButton to="/">
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "8px" }} />
            {t("team.backHome")}
          </CamerounButton>
        </div>
      </main>

      {/* Modal for member details */}
      {showModal && activeMember && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <img
              src={activeMember.img}
              alt={activeMember.name}
              className="modal-img"
            />
            <h2 className="modal-name">{activeMember.name}</h2>
            <p className="modal-role">{t(activeMember.roleKey)}</p>
            <p className="modal-description">{activeMember.descKey ? t(activeMember.descKey) : ""}</p>
          </div>
        </div>
      )}
    </>
  );
}
