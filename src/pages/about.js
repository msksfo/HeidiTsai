import React from "react"

import Layout from "../components/layout/layout"
import aboutStyles from "../styles/about.module.scss"

import heidi1 from "../assets/images/heidi1.jpg"
import heidi2 from "../assets/images/heidi2.jpg"
import heidi5 from "../assets/images/heidi5.jpg"
import heidi3 from "../assets/images/heidi3.jpg"

import harpsichord from "../assets/images/keyboard2.jpg"
import keyboard from "../assets/images/keyboard.jpg"

//import SEO from "../components/seo"

const AboutPage = () => (
  <div>
    <Layout>
      <section className={aboutStyles.wrapper}>
        <div className={aboutStyles.sectionTitle}>
          <blockquote className={aboutStyles.titleQuote}>
            Heidi Tsai gave the fortepiano luscious beauty of tone. Her
            fingering was admirable, close to perfection. Her keen sense of
            musicality catches surprising twists of the phrases.
          </blockquote>

          <div className={aboutStyles.titleImage}>
            <img alt="Heidi" src={heidi1} />
          </div>
        </div>

        <div className={aboutStyles.sectionDividerImage}>
          <img
            className={aboutStyles.harpsichordImage}
            alt="harpsichord"
            src={harpsichord}
          />
        </div>

        <div className={aboutStyles.sectionContent}>
          <div className={aboutStyles.aboutText}>
            <p>
              <strong>Heidi Tsai</strong>, equally expressive on the
              harpsichord, fortepiano and piano, performs regularly on all three
              keyboard instruments. Her versatile musicality brings life to
              different genres of repertoire from 17th to 21st centuries.
              Ms.Tsai's latest solo recording (released in October 2018) of
              early German fortepiano music is inviting raving reviews from both
              Germany as well as Japan ("Ms. Tsai possesses a gift of a musical
              intelligence that keenly balances good taste, beauty and
              perspective" - from the Record Geijutsu disc Review, by Jiro
              Hamada), And from the German magazine Piano News: "Heidi Tsai
              delivers an unbelievably exciting interpretation and makes a
              fantastic statement for almost unheard of repertoire, it shows
              that she is a brilliant master of the Hammerflügel". This
              recording is masterfully produced by the b-sharp recording studio
              based in Berlin.
            </p>
            <p>
              Heidi holds a Doctorate in Music in Historical Keyboards from
              Indiana University in Bloomington, Indiana. In addition to having
              taught more than 30 years in higher musical institutions in Europe
              and the US, she also holds a Bachelor of Arts degree in Psychology
              from Boston University, which she regularly incorporates in her
              pedagogic approach. She has taught both piano and harpsichord at
              Boston University, Boston Conservatory, Arizona State University
              and Indiana University. Between 2002-2019, Heidi Tsai was on the
              faculty in the early music department at the Escola Superior de
              Música de Catalunya (ESMUC) in Barcelona, and taught the
              harpsichord professor and led an early music ensemble at the
              Conservatoire in Pau, France.
            </p>

            <p>
              Ms. Tsai's most recent project involved two performances of the
              complete sonatas for violin and obbligato harpsichord by J.S.Bach,
              with Swiss violinist, Gilles Colliard. Ms. Tsai has been invited
              to play in major concert series and music festivals throughout the
              United States, Central America, Asia and Europe. In an orchestral
              setting, she has collaborated with Christian Zacharias, Giovanni
              Antonini, Leonard Slatkin, and Robert King, Stanley Ritchie, and
              Nigel North. Heidi Tsai holds a doctoral degree in historical
              keyboards from the Jacob School of Music, in Bloomington, Indiana.
              Heidi Tsai has co-founded and directed the early music group
              Barcelona Barroc. Their recording, Chiaoscuro, features the two
              concerti for the harpsichord, violin and the flute, by Johann
              Sebastian Bach.
            </p>
            <p>
              Heidi's live performance of the Goldberg Variations in Spain
              received enthusiastic and warm feedback from the audiences, and
              was recorded and broadcasted by Catalunya Música radio station.
              She has also been invited and performed on the television program
              'El Temps del Picó' (Barcelona).
            </p>
            <p>
              Her public performances have invited raving reviews (of her Mozart
              concerto): "Heidi Tsai gave the fortepiano luscious beauty of
              tone. Her fingering was admirable, close to perfection. Her keen
              sense of musicality catches surprising twists of the phrases. Ms.
              Tsai "sang" the Mozartian Aria from the second movement
              charmingly." "As a soloist, she is magnetically engaging to the
              point of sitting on the edge of one’s seat!" (Nigel North, concert
              lutenist). “Fantastic, exciting, imaginative and very
              distinguished playing.” (Conductor, Robert King, of King’s
              Consort).
            </p>
          </div>

          <div className={aboutStyles.sectionImages}>
            <ul className={aboutStyles.imageList}>
              <li className={aboutStyles.image}>
                <img className={aboutStyles.aboutImage} src={heidi2} alt="" />
              </li>
            </ul>
          </div>
          <div className={aboutStyles.clearFix}></div>
        </div>
      </section>
    </Layout>
  </div>
)

export default AboutPage
