import React from "react";
import "../styles/engagement.css";
import Divider from "../components/Divider";

function Home() {
  return (
    <main className="home-container">
      <Divider /> {/* ligne de séparation */}
      {/* Engagement Area Section */}
      <section id="Engagement" className="engagement-area">
        {/* Titre centré */}
        <div className="section-title">
          <h3>Engagements de l'association</h3>
        </div>

        {/* Liste des engagements */}
        <div className="engagement-list">
          {/* Engagement 1 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/comptabilite.png"
                alt="Pièces de monnaie empilées"
              />
            </div>
            <div className="desc">
              <h4>Comptabilité sans faille</h4>
              <p className="home-card-text">
                L'association Mama Esther veille à maintenir une comptabilité
                rigoureuse et transparente. Nous utilisons des systèmes de
                gestion financière avancés pour assurer que toutes les
                transactions sont enregistrées avec précision. Chaque don et
                chaque dépense sont minutieusement suivis et audités
                régulièrement pour garantir une utilisation éthique et efficace
                des ressources. Notre engagement envers une comptabilité sans
                faille reflète notre dévouement à la transparence et à la
                responsabilité envers nos donateurs et bénéficiaires. En
                garantissant une gestion financière rigoureuse, nous renforçons
                la confiance de nos donateurs et partenaires et assurons que
                chaque contribution est utilisée pour maximiser l'impact de nos
                actions.
              </p>
              <a href="/contact" className="home-link">
                Vous avez des questions ? Cliquez ici
              </a>
            </div>
          </article>

          {/* Engagement 2 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/soutien.png"
                alt="Portrait de cinq jeunes enfants Africains"
              />
            </div>
            <div className="desc">
              <h4>Soutien aux enfants, mais pas que...</h4>
              <p className="home-card-text">
                L'association Mama Esther s'engage à apporter un soutien global
                à la communauté, en commençant par les enfants mais sans s'y
                limiter. Nous offrons des services incluant : le soutien
                scolaire, les soins médicaux et l'accompagnement moral, pour
                assurer leur bien-être. Mais, cela ne s'arrête pas là. Nous
                étendons nos efforts aux adultes en difficulté, fournissant des
                formations professionnelles et un accès à des ressources
                essentielles. En adoptant une approche holistique, nous visons à
                renforcer l'ensemble de la communauté, créant ainsi un
                environnement où chacun peut prospérer. Notre objectif est de
                bâtir un avenir meilleur pour tous, pour les plus jeunes tout en
                soutenant les adultes qui jouent un rôle crucial dans leur
                épanouissement.
              </p>
              <a href="/contact" className="home-link">
                Vous avez des questions ? Cliquez ici
              </a>
            </div>
          </article>

          {/* Engagement 3 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/volontariat.png"
                alt="Rassemblement de mains et de pieds en cercle"
              />
            </div>
            <div className="desc">
              <h4>Un volontariat désintéressé</h4>
              <p className="home-card-text">
                L'association Mama Esther repose sur l'engagement indéfectible
                de ses bénévoles, dont le volontariat désintéressé est la clé de
                notre succès. Chaque jour, ils offrent de leur temps et de leur
                énergie sans attendre de contrepartie, animés par le désir de
                faire une différence dans la vie des plus vulnérables. Leur
                dévouement va bien au-delà des simples tâches, car ils apportent
                soutien, espoir et réconfort à ceux qui en ont le plus besoin.
                Ce volontariat, guidé par des valeurs de solidarité et de
                compassion, est essentiel pour mener à bien nos missions. Grâce
                à ces héros du quotidien, nous sommes en mesure de réaliser des
                projets ambitieux et d'apporter une aide précieuse à notre
                communauté. Leur altruisme et leur générosité témoignent de leur
                esprit véritable.
              </p>
              <a href="/contact" className="home-link">
                Vous avez des questions ? Cliquez ici
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
