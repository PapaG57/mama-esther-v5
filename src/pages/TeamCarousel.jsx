import { useState, useEffect, useCallback, useRef } from "react";
import CamerounButton from "../components/CamerounButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../styles/team-carousel.css";

const teamMembers = [
  {
    name: "Eshter GERARD",
    role: "Présidente",
    img: "/assets/team/esther.png",
  },
  {
    name: "Florent GERARD",
    role: "Vice-Président",
    img: "/assets/team/florent.png",
  },
  {
    name: "Maeva DAHER-KHATER",
    role: "Trésorière",
    img: "/assets/team/maeva.png",
  },
  {
    name: "Aziz DAHER-KHATER",
    role: "Logistique",
    img: "/assets/team/aziz.png",
  },
  {
    name: "Margault WILLEMS",
    role: "Infirmière",
    img: "/assets/team/marie.png",
  },
  {
    name: "Melanie LOPES",
    role: "Infirmière",
    img: "/assets/team/melanie.png",
  },
  {
    name: "Jane DOE",
    role: "Social Media Manager",
    img: "/assets/team/jane-doe.png",
  },
  {
    name: "Jules BILLONG",
    role: "Administrateur",
    img: "/assets/team/jules.png",
  },
  {
    name: "Odette NGO BIHAÏ",
    role: "Maître d'Oeuvre",
    img: "/assets/team/odette.png",
  },
];

export default function TeamCarousel() {
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
        <h1 className="about-title green-box">NOTRE ÉQUIPE</h1>

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
                onClick={() => goTo(i - index)}
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
          <p className="member-role">{teamMembers[index].role}</p>
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
            Accueil
          </CamerounButton>
        </div>
      </main>
    </>
  );
}
