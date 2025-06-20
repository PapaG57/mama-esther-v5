import { useState, useEffect, useCallback, useRef } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import "../styles/team-carousel.css";

const teamMembers = [
  {
    name: "Emily Kim",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
  {
    name: "Michael Steward",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
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
        <TopBar />
        <Navbar />
        <h1 className="about-title">NOTRE ÉQUIPE</h1>

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
      </main>
    </>
  );
}
