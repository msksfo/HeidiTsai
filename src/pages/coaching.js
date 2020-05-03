import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
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
            <div className={coachingStyles.innerArtistBackground}></div>
            <div className={coachingStyles.innerArtistSession}>
              <p>
                Guided meditation, custom-designed assignment (physical and
                writing) to establish self-regulated learning in your chosen
                creative voices (music, art, dance, writing, painting, etc),
                discussion and exploration of your unique creative connection
                and contribution to the world.
              </p>
              <details>
                <summary>For the Artist in Us</summary>
                <p>
                  one time 20-minute free online consultation hour : 100 euros
                  package of 5 sessions: (recommended) 450 euros
                </p>
              </details>
            </div>
          </div>

          <div className={coachingStyles.coachingSessionWrapper}>
            <div className={coachingStyles.professionalArtistBackground}></div>
            <div className={coachingStyles.professionalSession}>
              <p>
                Accompanied practices, custom designed exercises to enable
                performances without medication, exploration on perfection,
                compliments, and criticisms, working with the ego instead of
                being controlled by it, recurring dreams, sustainable,
                self-regulated lifestyle.
              </p>
              <details>
                <summary>For Professionals</summary>
                <p>
                  one time 20-minute free online consultation hour : 100 euros
                  package of 5 sessions: (recommended) 450 euros
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </div>
)

export default CoachingPage
