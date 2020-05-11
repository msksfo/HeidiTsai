import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import Album from "../components/album/album"
import Piece from "../components/piece/piece"

import albumFrontCover from "../assets/images/cdFront.png"
//////import albumBackCover from "../assets/images/cdBack.png"
import keyboard from "../assets/images/keyboard3.jpg"

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
            be purchased from Amazon in Germany. For friends who live in other
            parts of the world, please contact me through the form on the
            contact page, if you are interested in a copy. <br /> <br />
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

          <Album
            imageUrl={albumFrontCover}
            caption={
              <a
                href="https://www.amazon.de/s?k=heidi+tsai&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_1"
                target="_blank"
                rel="noopener noreferrer"
                className={discographyStyles.amazonButton}
              >
                Buy from Amazon
              </a>
            }
            pieces={
              <div>
                <Piece
                  composer="Norbert Burgmuller"
                  title="Piano Sonata F minor, op. 8"
                  movements={
                    <p>
                      I. Allegro molto <br />
                      II. Romanze <br />
                      III. Finale. Allegro molto e con fuoco
                    </p>
                  }
                />
                <Piece
                  composer="Ludwig Schunke"
                  title="Piano Sonata G minor, op. 3"
                  movements={
                    <p>
                      I. Allegro <br />
                      II. Scherzo. Molto Allegro <br />
                      III. Andante sostenuto <br />
                      IV. Finale. Allegro
                    </p>
                  }
                />
                <Piece
                  composer="Johan Nepomuk Hummel"
                  title=" Piano Sonata #5 in F# minor, op. 81"
                  movements={
                    <p>
                      I. Allegro <br />
                      II. Largo con molt'espressione <br />
                      III. Vivace
                    </p>
                  }
                />
              </div>
            }
          />

          <Album
            imageUrl="https://static.wixstatic.com/media/0fe1cc_0da90acfdcb24ca6aa0c9ce0efed3751~mv2.jpg/v1/fill/w_1020,h_564,al_c,q_85,usm_0.66_1.00_0.01/SPhotoEditor-20190508_102957_edited_edit.webp"
            caption={
              <div>
                <p>
                  This CD is not commercially available, but can be purchased
                  privately, by contacting me through the form on the contact
                  page.
                </p>
                <p>
                  To read more about the multi-Grammy winning recording studio
                  who produced both of these CD's,{" "}
                  <a
                    href="https://www.b-sharp.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={discographyStyles.studioLink}
                  >
                    meet b-sharp music and media solutions
                  </a>
                </p>
              </div>
            }
            pieces={
              <div>
                <Piece
                  composer="Johann Sebastian Bach"
                  title="Concerto in A minor for Harpsichord, Flute, and
                    Violin, BWV 1044"
                  movements={
                    <p>
                      I. Allegro <br />
                      II. Adagio ma non tanto e dolce <br />
                      III. Alla breve
                    </p>
                  }
                />
                <Piece
                  composer=" Georg Muffat"
                  title="String Sonata in G major"
                  movements={
                    <p>
                      I. Allemande <br />
                      II. Adagio <br />
                      III. Fuga <br />
                      IV. Adagio <br />
                      V. Passacaglia
                    </p>
                  }
                />
                <Piece
                  composer="Johan Nepomuk Hummel"
                  title=" Piano Sonata #5 in F# minor, op. 81"
                  movements={
                    <p>
                      I. Allegro <br />
                      II. Largo con molt'espressione <br />
                      III. Vivace
                    </p>
                  }
                />
              </div>
            }
          />
        </div>
      </section>
    </Layout>
  </div>
)

export default DiscographyPage
