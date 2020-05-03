import React from "react"

import Layout from "../components/layout/layout"
import cs from "classnames"
import coachingStyles from "../styles/coaching.module.scss"

//import SEO from "../components/seo"

const CoachingPage = () => (
  <div>
    <Layout>
      <div className={coachingStyles.wrapper}>
        <div className={coachingStyles.heroImageContainer}>
          <h1 className={coachingStyles.heroText}>
            Embodied{" "}
            <span className={coachingStyles.creativitySpan}>Creativity</span>{" "}
            Coaching
          </h1>
        </div>

        <section className={coachingStyles.aboutSection}>
          <div className={coachingStyles.aboutCoachingWrapper}>
            <h1>What is Embodied Creativity?</h1>
            <p className={coachingStyles.aboutCoachingText}>
              Embodied Creativity is a practice for those who choose to dedicate
              their life to creativity and play in each moment; or for
              professionals who are currently working in a creative field
              (music, dance, art, theater, etc.), who might need a helping hand
              with performance-related stress, juggling between work and life,
              and are looking for more joyous ways to sustain your artistic
              endeavors: medication-free, without physical pains and/or
              recurring dreams. Creativity is the essence of our vitality, a
              constant wealth to enrich our existence. Let’s tap deeper into
              this resource and release our life purpose. Leave a request for a
              1-on-1 session by going to "making contact".
            </p>
          </div>

          <div className={coachingStyles.coachingSessionWrapper}>
            <h2 className={coachingStyles.sessionType}>For the Artist in Us</h2>
            <div
              data-sessionType="For the Artist in Us"
              className={cs(
                coachingStyles.sessionBackground,
                coachingStyles.innerArtistBackground
              )}
            >
              <div
                className={cs(
                  coachingStyles.session,
                  coachingStyles.innerArtistSession
                )}
              >
                <p>
                  Guided meditation, custom-designed assignment (physical and
                  writing) to establish self-regulated learning in your chosen
                  creative voices (music, art, dance, writing, painting, etc),
                  discussion and exploration of your unique creative connection
                  and contribution to the world.
                </p>
                <details>
                  <summary>Pricing Information</summary>
                  <ul className={coachingStyles.priceList}>
                    <li>One time 20-minute free online consultation</li>
                    <li>1 hour: 100 Euros</li>
                    <li>Package of 5 sessions (recommended): 450 Euros</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>

          <div className={coachingStyles.coachingSessionWrapper}>
            <h2 className={coachingStyles.sessionType}>For Professionals</h2>
            <div
              data-sessionType="For Professionals"
              className={cs(
                coachingStyles.sessionBackground,
                coachingStyles.professionalArtistBackground
              )}
            >
              <div
                className={cs(
                  coachingStyles.session,
                  coachingStyles.professionalSession
                )}
              >
                <p>
                  Accompanied practices, custom designed exercises to enable
                  performances without medication, exploration on perfection,
                  compliments, and criticisms, working with the ego instead of
                  being controlled by it, recurring dreams, sustainable,
                  self-regulated lifestyle.
                </p>
                <details>
                  <summary>Pricing Information</summary>
                  <ul className={coachingStyles.priceList}>
                    <li>One time 20-minute free online consultation</li>
                    <li>1 hour: 100 Euros</li>
                    <li>Package of 5 sessions (recommended): 450 Euros</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>

          <div className={coachingStyles.coachingSessionWrapper}>
            <h2 className={coachingStyles.sessionType}>
              A Gift of Deeper Connections
            </h2>
            <div
              data-sessionType="A Gift of Deeper Connections"
              className={cs(
                coachingStyles.sessionBackground,
                coachingStyles.deeperConnectionsBackground
              )}
            >
              <div
                className={cs(
                  coachingStyles.session,
                  coachingStyles.deeperConnectionsSession
                )}
              >
                <p>
                  Accompanied practices, custom designed exercises to enable
                  performances without medication, exploration on perfection,
                  compliments, and criticisms, working with the ego instead of
                  being controlled by it, recurring dreams, sustainable,
                  self-regulated lifestyle.
                </p>
                <details>
                  <summary>Pricing Information</summary>
                  <p>Suggested donation: ​ 50-60 euros</p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </div>
)

export default CoachingPage
