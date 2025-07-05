import React, { useState, useEffect, useCallback, useRef } from "react";
import CamerounButton from "../components/CamerounButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../styles/teamCarousel.css";

const teamMembers = [
  {
    name: "Eshter GERARD",
    role: "Présidente",
    img: "/assets/team/esther.png",
    description:
      "Je m'appelle Esther GERARD, aide-soignante travaillant au Luxembourg. Depuis des décennies, j'ai eu à cœur de créer une association pour prendre soin des enfants du Cameroun, mon pays natal, ainsi que de ceux dans le besoin. Ces enfants doivent retrouver des valeurs dans leur vie et comprendre que le malheur qui les touche n'est ni une fatalité, ni une finalité. Comme une mère, je ressens ce besoin profond de leur offrir l'amour d'une maman qu'ils n'ont plus. Nous étendons également cet amour aux personnes défavorisées et dans le besoin. Je souhaite ainsi apporter mes compétences et mes connaissances à ceux qui en ont le plus besoin car pour eux aussi, le malheur qui les touche n'est ni une fatalité, ni une finalité.",
  },
  {
    name: "Florent GERARD",
    role: "Vice-Président",
    img: "/assets/team/florent.png",
    description:
      "Je m'appelle Florent GERARD et je suis le mari de 'Mama Esther'. L'idée de créer une association pour venir en aide aux enfants défavorisés est née d'un rêve commun. Depuis toujours, j'ai aimé les enfants, innocentes victimes d'un monde souvent indifférent à leur sort. Bien que certaines personnes fassent des efforts, les moyens ne sont pas toujours suffisants et, malgré les soins apportés, les enfants ne reçoivent pas ce qu'ils méritent. En plus d'aider les enfants, nous venons également en aide aux personnes défavorisées. Fonctionnaire en France depuis 30 ans, je gère toute l'administration de l'association et supervise le site ainsi que les réseaux sociaux afin d'apporter mes compétences et mes connaissances.",
  },
  {
    name: "Maeva DAHER-KHATER",
    role: "Trésorière",
    img: "/assets/team/maeva.png",
    description:
      "Je m'appelle Maryam, trésorière de l'association et fille de notre présidente, 'Mama Esther'. Depuis mon plus jeune âge, j'ai été inspirée par l'engagement et la passion de ma mère pour aider les enfants défavorisés. Ayant grandi avec ces valeurs, j'ai décidé de m'investir pleinement dans cette noble cause. En tant que trésorière, je veille à la bonne gestion financière de l'association, afin de garantir que chaque don soit utilisé de manière efficace et transparente. Mon objectif est de contribuer à offrir un avenir meilleur aux enfants et aux personnes dans le besoin, en apportant mon dévouement à notre mission commune. Je suis convaincue que, grâce à notre engagement collectif, nous pouvons apporter des changements significatifs et durables.",
  },
  {
    name: "Aziz DAHER-KHATER",
    role: "Logistique",
    img: "/assets/team/aziz.png",
    description:
      "Je m'appelle Aziz et je suis le président de l'ONG AVUCA (aide aux Vulnérables de Centrafrique). Depuis plusieurs années, j'ai eu l'honneur de travailler pour améliorer leurs conditions de vie. Étant moi-même orphelin de père et de mère, je comprends profondément les défis que rencontrent les enfants vulnérables. C’est avec enthousiasme que je m'engage au sein de l'association 'Mama Esther'. Je suis désireux de partager mon expérience et mes compétences pour apporter un soutien concret à ces enfants, en apprenant des autres membres de cette belle communauté. Je crois fermement que, ensemble, nous pouvons transformer leurs vies et leur offrir un avenir meilleur. Merci de m'accueillir parmi vous.",
  },
  {
    name: "Margault WILLEMS",
    role: "Infirmière",
    img: "/assets/team/margault.png",
    description:
      "Je m'appelle Margault, j'ai 29 ans et je viens de Belgique. Infirmière de métier, je suis passionnée par mon travail et par le bien-être des autres. En dehors de ma profession, je suis une grande sportive et je m'investis dans des activités qui me permettent de rester en forme et équilibrée. J'adore voyager, découvrir de nouvelles cultures, et rencontrer des gens de tous horizons. Les animaux ont aussi une place importante dans ma vie. Enfin, le yoga est une pratique que j'apprécie particulièrement pour son côté apaisant et revitalisant. Mon engagement au sein de l'association 'Mama Esther' est une manière pour moi de contribuer à une cause qui me tient à cœur et d'apporter mon aide à ceux qui en ont le plus besoin.",
  },
  {
    name: "Marie JADDAOUI",
    role: "Infirmière",
    img: "/assets/team/marie.png",
    description:
      "Bonjour, je m’appelle Marie, j’ai 24 ans et je suis infirmière à domicile et spécialisée avec les enfants. Passionnée par les voyages, les rencontres humaines et le volontariat à l'étranger, je souhaite transmettre mes valeurs et compétences aux enfants et aux populations locales. Mon objectif est d'améliorer les conditions de vie des communautés camerounaises grâce à mes compétences relationnelles et professionnelles, et ma passion pour la solidarité et l’humain. Je crois que chaque petite action peut avoir un grand impact. Mon engagement dans l’association 'Mama Esther' vise à contribuer à des projets concrets ayant un impact réel sur le terrain. Au plaisir de recevoir vos dons, d'échanger avec vous ou de vous rencontrer. 🙂",
  },
  {
    name: "Melanie LOPES",
    role: "Infirmière",
    img: "/assets/team/melanie.png",
    description:
      "Je m'appelle Mélanie, je suis infirmière et je travaille au Luxembourg. Quand ma collègue de travail, Esther, m'a parlé de la création d'une association pour venir en aide aux enfants du Cameroun, je n'ai pas hésité une seconde à vouloir apporter mon dévouement à ce voyage humanitaire extraordinaire. Accompagner ces enfants dans leur bien-être, leur éducation, leur développement et leur santé fait partie de mes priorités. En contribuant à cette cause, j'espère inspirer d'autres personnes à prendre part à des initiatives humanitaires et à faire une réelle différence dans la vie des enfants. Ensemble, nous pouvons créer un futur meilleur pour ces enfants, et je suis impatiente de commencer cette aventure humaine et solidaire.",
  },
  {
    name: "Jules BILLONG",
    role: "Administrateur",
    img: "/assets/team/jules.png",
    description: "",
  },
  {
    name: "Odette NGO BIHAÏ",
    role: "Maître d'Oeuvre",
    img: "/assets/team/odette.png",
    description: "",
  },
  {
    name: "Jane DOE",
    role: "Social Media Manager",
    img: "/assets/team/jane-doe.png",
    description: "",
  },
];

export default function TeamCarousel() {
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
        <h1 className="about-title green-box glow-outline">NOTRE ÉQUIPE</h1>
        <p className="carousel-hint flashy">
          Cliquez sur une image pour en savoir plus
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
            <p className="modal-role">{activeMember.role}</p>
            <p className="modal-description">{activeMember.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
