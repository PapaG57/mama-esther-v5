import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <main className="container">
      <section class="engagement-area section-padding">
        <div class="row">
          <div class="comment-list section_padding_2">
            <article class="single-comment">
              <div class="user d-flex justify-content-between">
                <div class="thumbnail">
                  <img
                    src="img/engagement/1.png"
                    alt="pièces de monnaie empilées"
                  />
                </div>
                <div class="desc">
                  <div
                    id="engagement2"
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h4 class="text-uppercase text-primary">
                      Comptabilité sans faille
                    </h4>
                  </div>
                  <p class="comment text-justify text-dark">
                    L'association Mama Esther veille à maintenir une
                    comptabilité rigoureuse et transparente. Nous utilisons des
                    systèmes de gestion financière avancés pour assurer que
                    toutes les transactions sont enregistrées avec précision.
                    Chaque don et chaque dépense sont minutieusement suivis et
                    audités régulièrement pour garantir une utilisation éthique
                    et efficace des ressources. Notre engagement envers une
                    comptabilité sans faille reflète notre dévouement à la
                    transparence et à la responsabilité envers nos donateurs et
                    bénéficiaires. En garantissant une gestion financière
                    rigoureuse, nous renforçons la confiance de nos donnateurs
                    et partenaires et assurons que chaque contribution est
                    utilisée pour maximiser l'impact de nos actions.
                  </p>
                </div>
              </div>
            </article>

            <article class="single-comment">
              <div
                id="engagement3"
                class="user d-flex justify-content-between align-items-center"
              >
                <div class="thumbnail">
                  <img
                    src="img/engagement/2.png"
                    alt="portrait de cinq jeunes enfants Africains"
                  />
                </div>
                <div class="desc">
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-uppercase text-primary">
                      Soutien aux enfants, mais pas que...
                    </h4>
                  </div>
                  <p class="comment text-justify text-dark">
                    L'association Mama Esther s'engage à apporter un soutien
                    global à la communauté, en commençant par les enfants mais
                    sans s'y limiter. Nous offrons des services incluant : le
                    soutien scolaire, les soins médicaux et l'accompagnement
                    moral, pour assurer leur bien-être. Mais, cela ne s'arrête
                    pas là. Nous étendons nos efforts aux adultes en difficulté,
                    fournissant des formations professionnelles et un accès à
                    des ressources essentielles. En adoptant une approche
                    holistique, nous visons à renforcer l'ensemble de la
                    communauté, créant ainsi un environnement où chacun peut
                    prospérer. Notre objectif est de bâtir un avenir meilleur
                    pour tous, pour les plus jeunes tout en soutenant les
                    adultes qui jouent un rôle crucial dans leur épanouissement.
                  </p>
                </div>
              </div>
            </article>

            <article class="single-comment">
              <div class="user d-flex justify-content-between align-items-center">
                <div class="thumbnail">
                  <img
                    src="img/engagement/3.png"
                    alt="rassemblement de mains et de pieds en cercle sur le gazon"
                  />
                </div>
                <div class="desc">
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-uppercase text-primary">
                      Un volontariat désintéressé
                    </h4>
                  </div>
                  <p class="comment text-justify text-dark">
                    L'association Mama Esther repose sur l'engagement
                    indéfectible de ses bénévoles, dont le volontariat
                    désintéressé est la clé de notre succès. Chaque jour, ils
                    offrent de leur temps et de leur énergie sans attendre de
                    contrepartie, animés par le désir de faire une différence
                    dans la vie des plus vulnérables. Leur dévouement va bien
                    au-delà des simples tâches, car ils apportent soutien,
                    espoir et réconfort à ceux qui en ont le plus besoin. Ce
                    volontariat, guidé par des valeurs de solidarité et de
                    compassion, est essentiel pour mener à bien nos missions.
                    Grâce à ces héros du quotidien, nous sommes en mesure de
                    réaliser des projets ambitieux et d'apporter une aide
                    précieuse à notre communauté. Leur altruisme et leur
                    générosité témoignent de leur esprit véritable.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
