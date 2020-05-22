import React, { Component } from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import aboutStyles from "../styles/about.module.scss"

import heidi1 from "../assets/images/heidi1.jpg"
import heidi2 from "../assets/images/heidi2.jpg"
import heidi5 from "../assets/images/heidi5.jpg"
import heidi3 from "../assets/images/heidi3.jpg"
import heidi4 from "../assets/images/heidi4.jpg"
import heidi6 from "../assets/images/heidi6.jpg"
import heidi7 from "../assets/images/heidi7.jpg"
import heidi8 from "../assets/images/heidi8.jpg"
import heidi9 from "../assets/images/heidi9.jpg"
import heidi10 from "../assets/images/heidi10.jpg"
import harpsichord from "../assets/images/keyboard3.jpg"

//import SEO from "../components/seo"

class AboutPage extends Component {
  constructor(props) {
    super()
    this.state = {
      //isMobile: window.innerWidth < 800,
      isMobile: false,
      currentIndex: 0,
      images: [
        heidi2,
        heidi3,
        heidi4,
        heidi5,
        heidi6,
        heidi7,
        heidi8,
        heidi9,
        heidi10,
        harpsichord,
      ],
    }
  }

  componentDidMount() {
    let windowSize = this.getWindowSize()
    // !this.state.isMobile

    // only add the rotating images in if the window width is at least 800px
    if (!windowSize) {
      console.log("not mobile. starting interval")
      this.interval = setInterval(this.changeImage, 10000)
    }

    window.addEventListener("resize", this.updatePhotos)
  }

  getWindowSize = () => {
    this.setState({
      isMobile: window.innerWidth < 800,
    })

    // because setState is asynchronous, and I need this value immediately
    return window.innerWidth < 800
  }

  updatePhotos = () => {
    let state = { ...this.state }

    // only setState if window width has gone from < 800 to >= 800 or vice versa.
    if (state.isMobile !== window.innerWidth < 800) {
      this.setState(prevState => {
        // if isMobile has gone from true to false, start the interval to rotate images.
        if (prevState.isMobile > (window.innerWidth < 800)) {
          this.interval = setInterval(this.changeImage, 10000)

          // or if isMobile has gone from false to true, clear the interval.
        } else if (prevState.isMobile < (window.innerWidth < 800)) {
          clearInterval(this.interval)
        }

        return {
          ...this.state,
          isMobile: window.innerWidth < 800,
        }
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log(window)
    window.removeEventListener("resize", this.updatePhotos)
  }

  changeImage = () => {
    let index = this.state.currentIndex

    let nextIndex =
      this.state.currentIndex === this.state.images.length - 1 ? 0 : index + 1

    return this.setState({
      currentIndex: nextIndex,
    })
  }

  render() {
    return (
      <div>
        <Layout>
          <Head title="About" />
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

            <div className={aboutStyles.sectionContent}>
              <div className={aboutStyles.aboutText}>
                <p>
                  <strong>Heidi Tsai</strong>, equally expressive on the
                  harpsichord, fortepiano and piano, performs regularly on all
                  three keyboard instruments. Her versatile musicality brings
                  life to different genres of repertoire from 17th to 21st
                  centuries. Ms.Tsai's latest solo recording (released in
                  October 2018) of early German fortepiano music is inviting
                  raving reviews from both Germany as well as Japan ("Ms. Tsai
                  possesses a gift of a musical intelligence that keenly
                  balances good taste, beauty and perspective" - from the Record
                  Geijutsu disc Review, by Jiro Hamada), And from the German
                  magazine Piano News: "Heidi Tsai delivers an unbelievably
                  exciting interpretation and makes a fantastic statement for
                  almost unheard of repertoire, it shows that she is a brilliant
                  master of the Hammerflügel". This recording is masterfully
                  produced by the b-sharp recording studio based in Berlin.
                </p>
                <p>
                  Heidi holds a Doctorate in Music in Historical Keyboards from
                  Indiana University in Bloomington, Indiana. In addition to
                  having taught more than 30 years in higher musical
                  institutions in Europe and the US, she also holds a Bachelor
                  of Arts degree in Psychology from Boston University, which she
                  regularly incorporates in her pedagogic approach. She has
                  taught both piano and harpsichord at Boston University, Boston
                  Conservatory, Arizona State University and Indiana University.
                  Between 2002-2019, Heidi Tsai was on the faculty in the early
                  music department at the Escola Superior de Música de Catalunya
                  (ESMUC) in Barcelona, and taught the harpsichord professor and
                  led an early music ensemble at the Conservatoire in Pau,
                  France.
                </p>

                <p>
                  Ms. Tsai's most recent project involved two performances of
                  the complete sonatas for violin and obbligato harpsichord by
                  J.S.Bach, with Swiss violinist, Gilles Colliard. Ms. Tsai has
                  been invited to play in major concert series and music
                  festivals throughout the United States, Central America, Asia
                  and Europe. In an orchestral setting, she has collaborated
                  with Christian Zacharias, Giovanni Antonini, Leonard Slatkin,
                  and Robert King, Stanley Ritchie, and Nigel North. Heidi Tsai
                  holds a doctoral degree in historical keyboards from the Jacob
                  School of Music, in Bloomington, Indiana. Heidi Tsai has
                  co-founded and directed the early music group Barcelona
                  Barroc. Their recording, Chiaoscuro, features the two concerti
                  for the harpsichord, violin and the flute, by Johann Sebastian
                  Bach.
                </p>
                <p>
                  Heidi's live performance of the Goldberg Variations in Spain
                  received enthusiastic and warm feedback from the audiences,
                  and was recorded and broadcasted by Catalunya Música radio
                  station. She has also been invited and performed on the
                  television program 'El Temps del Picó' (Barcelona).
                </p>
                <p>
                  Her public performances have invited raving reviews (of her
                  Mozart concerto): "Heidi Tsai gave the fortepiano luscious
                  beauty of tone. Her fingering was admirable, close to
                  perfection. Her keen sense of musicality catches surprising
                  twists of the phrases. Ms. Tsai "sang" the Mozartian Aria from
                  the second movement charmingly." "As a soloist, she is
                  magnetically engaging to the point of sitting on the edge of
                  one’s seat!" (Nigel North, concert lutenist). “Fantastic,
                  exciting, imaginative and very distinguished playing.”
                  (Conductor, Robert King, of King’s Consort).
                </p>
              </div>

              <div className={aboutStyles.sectionImages}>
                <ul className={aboutStyles.imageList}>
                  <li className={aboutStyles.image}>
                    <img
                      className={aboutStyles.aboutImage}
                      src={this.state.images[this.state.currentIndex]}
                      alt="Heidi"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}

export default AboutPage
