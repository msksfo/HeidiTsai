import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import albumFrontCover from "../assets/images/cdFront.png"
import albumBackCover from "../assets/images/cdBack.png"
import discographyStyles from "../styles/discography.module.scss"
import cs from "classnames"

//import SEO from "../components/seo"

const DiscographyPage = () => (
  <div>
    <Layout>
      <Head title="Discography" />
      <section className={discographyStyles.section}>
        <div className={discographyStyles.sectionContentWrapper}>
          <h1 className={discographyStyles.sectionTitle}>
            <span>the latest</span>
            <br />
            Watch, Listen, Shop
          </h1>

          <p className={discographyStyles.introText}>
            Dear friends in Europe: this is my latest recording which was
            released last autumn. If you like to discover unknown repertoire
            with personality, and love the sound of the fortepiano, this CD can
            be purchased from Amazon in Germany.{" "}
            <a
              href="https://www.amazon.de/s?k=heidi+tsai&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_1"
              target="_blank"
              rel="noopener noreferrer"
              className={discographyStyles.amazonButton}
            >
              Buy from Amazon
            </a>
            <br />
            Read about the conception of this recording{" "}
            <a
              href="https://www.funk-stiftung.org/de/projekte/kultur/heidi-tsai-burgmueller-schuncke-hummel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <div className={discographyStyles.newAlbumIntro}>
            {/* 
           
             <p className={discographyStyles.aboutStudio}>
                   To read more
                  about the multi-Grammy winning recording studio who produced both of
                  these CD's, meet b-sharp music and media solutions.
                </p>
          */}

            <figure className={discographyStyles.albumWrapper}>
              <img
                className={discographyStyles.albumFrontCover}
                src={albumFrontCover}
                alt="Album front cover"
              />
            </figure>
            <div>
              <div className={discographyStyles.albumDetails}>
                <div className={discographyStyles.piece}>
                  <h2 className={discographyStyles.pieceTitle}>
                    Norbert Burgmuller
                    <br /> Piano Sonata F minor, op. 8
                  </h2>
                  <p>
                    I. Allegro molto <br />
                    II. Romanze <br />
                    III. Finale. Allegro molto e con fuoco
                  </p>
                </div>

                <div className={discographyStyles.piece}>
                  <h2 className={discographyStyles.pieceTitle}>
                    Ludwig Schunke
                    <br /> Piano Sonata G minor, op. 3
                  </h2>
                  <p>
                    I. Allegro <br />
                    II. Scherzo. Molto Allegro <br />
                    III. Andante sostenuto <br />
                    IV. Finale. Allegro
                  </p>
                </div>

                <div className={discographyStyles.piece}>
                  <h2 className={discographyStyles.pieceTitle}>
                    Johan Nepomuk Hummel
                    <br /> Piano Sonata #5 in F# minor, op. 81
                  </h2>
                  <p>
                    I. Allegro <br />
                    II. Largo con molt'espressione <br />
                    III. Vivace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export default DiscographyPage
