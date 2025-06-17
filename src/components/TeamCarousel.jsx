import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/team-carousel.css";

const teamMembers = [
  {
    name: "Emily Kim",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3w...",
  },
  {
    name: "Michael Steward",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3w...",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3w...",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3w...",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3w...",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3w...",
  },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touch = useRef({ startX: 0, endX: 0 });

  /* utilitaire pour cycler proprement */
  const goTo = useCallback(
    (newIdx) => {
      if (animating) return;
      setAnimating(true);
      setIndex((prev) => (newIdx + teamMembers.length) % teamMembers.length);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  /* clavier */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  /* swipe mobile */
  const onTouchStart = (e) =>
    (touch.current.startX = e.changedTouches[0].screenX);
  const onTouchEnd = (e) => {
    touch.current.endX = e.changedTouches[0].screenX;
    const diff = touch.current.startX - touch.current.endX;
    if (Math.abs(diff) > 50) goTo(index + (diff > 0 ? 1 : -1));
  };

  /* classes pour positionner les cartes */
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
      <h1 className="about-title">NOTRE ÉQUIPE</h1>

      <div
        className="carousel-container"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button className="nav-arrow left" onClick={() => goTo(index - 1)}>
          ‹
        </button>

        <div className="carousel-track">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className={`card ${positionClass(i)}`}
              onClick={() => goTo(i)}
            >
              <img src={m.img} alt={m.name} />
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => goTo(index + 1)}>
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
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
