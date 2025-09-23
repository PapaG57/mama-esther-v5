import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import "../styles/mentions.css";

export default function MentionsLegales() {
  const navigate = useNavigate();
  return (
    <main className="mentions">
      <section className="mentions-container">
        <div className="mentions-header">
          <img
            src="/assets/mentions/logo-mama.png"
            alt="Logo Mama Esther"
            className="mentions-logo"
          />

          <img
            src="/assets/mentions/president-mama.png"
            alt="Photo de la Présidente"
            className="mentions-president"
          />
        </div>
        <h1 className="mentions-title">Mentions Légales</h1>
        <h2 className="mentions-date">En vigueur au 10/07/24</h2>

        <h3 className="mentions-section-title">ÉDITION DU SITE</h3>
        <p>
          L’édition et la direction de la publication du Site est assurée par
          Monsieur Florent GERARD, domicilié au 1 Rue des Troènes, dont le
          numéro de téléphone est le 06 45 65 65 17, et l'adresse e-mail
          florent.gerard@mamaesther.org. Ci-après l'Éditeur.
        </p>

        <h3 className="mentions-section-title">HEBERGEUR</h3>
        <p>
          L'hébergeur du Site est la société LWS - 007 Hébergement, dont le
          siège social est situé au 10 rue Penthièvre 75008 Paris.
        </p>

        <h3 className="mentions-section-title">ACCES AU SITE</h3>
        <p>
          Le Site est normalement accessible, à tout moment, à l'Utilisateur.
          Toutefois, l'Éditeur pourra, à tout moment, suspendre, limiter ou
          interrompre le Site afin de procéder, notamment, à des mises à jour ou
          des modifications de son contenu. L'Éditeur ne pourra en aucun cas
          être tenu responsable des conséquences éventuelles de cette
          indisponibilité sur les activités de l'Utilisateur.
        </p>

        <h3 className="mentions-section-title">
          PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇON
        </h3>
        <p>
          L’Association Mama Esther est propriétaire des droits de propriété
          intellectuelle ou détient les droits d’usage sur tous les éléments
          accessibles sur le site, notamment : les textes, les images, les
          graphismes, le logo, les icônes. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, toute
          exploitation non autorisée du site ou d’un quelconque élément qu’il
          contient sera considérée comme constitutive d’une contrefaçon et
          poursuivie conformément aux dispositions des articles L.335-2 et
          suivants du Code de Propriété Intellectuelle, sauf autorisation écrite
          au préalable de l’Association Mama Esther.
        </p>

        <h3 className="mentions-section-title">COOKIES ET TRACEURS</h3>
        <p>
          Le site internet de l'association Mama Esther ne possède pas de
          système de mesure d’audience, ni de fonction de partage sur les
          réseaux sociaux. Il ne vous sera donc pas demandé d’accepter de
          cookies ou autres traceurs. Cependant, vous avez la possibilité de
          cliquer sur les liens de nos réseaux sociaux. L'association Mama
          Esther ne pourra être tenue responsable des conséquences de votre
          navigation sur ces réseaux sociaux.
        </p>

        <h3 className="mentions-section-title">
          FORMULAIRE DE CONTACT ET COMMENTAIRES
        </h3>
        <p>
          Vous pouvez être amené à nous indiquer votre adresse e-mail lorsque
          vous remplissez notre formulaire de contact ou déposez un commentaire
          sur l’un des articles du site. En aucun cas, vos données ne seront
          cédées à des tiers. Nous tenons expressément au respect de vos
          données.
        </p>

        <h3 className="mentions-section-title">NEWSLETTER</h3>
        <p>
          Vous pouvez vous abonner à la newsletter du site. Vous recevez alors
          automatiquement et gratuitement des newsletters traitant des sujets du
          site de l'association Mama Esther. Vous pouvez vous désinscrire à tout
          moment en cliquant sur le lien de désabonnement présent en bas de
          chaque newsletter. En aucun cas, votre adresse e-mail ne sera cédée à
          des tiers.
        </p>

        <h3 className="mentions-section-title">LIENS HYPERTEXTES</h3>
        <p>
          Ce site internet contient un certain nombre de liens hypertextes vers
          d’autres sites. Cependant, l'association Mama Esther n’a pas la
          possibilité de suivre et vérifier le contenu de ces sites, et
          n’assumera en conséquence aucune responsabilité de ce fait.
        </p>

        <h3 className="mentions-section-title">FLUX RSS</h3>
        <p>
          Les flux RSS sont exclusivement destinés aux visiteurs du site pour
          une utilisation personnelle et ne sauraient en aucun cas servir à
          alimenter d’autres sites, sauf autorisation écrite au préalable de
          l'association Mama Esther.
        </p>
        <h3 className="mentions-section-title">
          PROTECTION DES DONNÉES PERSONNELLES
        </h3>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), l’association Mama Esther s’engage à garantir la
          confidentialité et la sécurité des données personnelles collectées.
          Ces données sont utilisées exclusivement dans le cadre des activités
          de l’association (dons, contact, volontariat...) et ne sont jamais
          cédées ou vendues à des tiers. Chaque utilisateur dispose d’un droit
          d’accès, de rectification, d’opposition et de suppression de ses
          données personnelles, qu’il peut exercer par simple demande à
          l’adresse suivante :{" "}
          <Link to="/contact#contact-form">association@mamaesther.org</Link>
        </p>

        <h3 className="mentions-section-title">SIGNATURE ASSOCIATIVE</h3>
        <p>
          L’Association Mama Esther s’engage à accueillir vos données comme elle
          accueille ses bénéficiaires : avec respect, sécurité et bienveillance.
        </p>
        <div className="mentions-button-group">
          <CamerounButton onClick={() => navigate(-1)} className="about-button">
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ marginRight: "8px" }}
            />
            Retour
          </CamerounButton>

          <CamerounButton to="/contact#contact-form" className="about-button">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            Nous écrire
          </CamerounButton>
        </div>
      </section>
    </main>
  );
}
