import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"

import listData from "../data.json"

import coachingStyles from "../styles/coaching.module.scss"
import CoachingSession from "../components/coachingSession/coachingSession"

//import SEO from "../components/seo"

const CoachingPage = () => (
  <div>
    <Layout pageTitle="Coaching">
      <Head title="Coaching" />
      <div className={coachingStyles.wrapper}>
        <div className={coachingStyles.heroImageContainer}>
          <div className={coachingStyles.heroTextContainer}>
            <h1 className={coachingStyles.heroText}>
              Embodied{" "}
              <span className={coachingStyles.creativitySpan}>Creativity</span>{" "}
              Coaching
            </h1>
          </div>
        </div>

        <section className={coachingStyles.aboutSection}>
          <div className={coachingStyles.aboutCoachingWrapper}>
            <h1 className={coachingStyles.titleHeader}>
              What is Embodied Creativity?
            </h1>
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
              1-on-1 session by filling out the form on the contact page.
            </p>
          </div>

          <CoachingSession
            sessionType="For the Artist in Us"
            artistBackground="innerArtistBackground"
            sessionBackground="innerArtistSession"
            sessionDescription="Guided meditation, custom-designed assignment (physical and writing)
            to establish self-regulated learning in your chosen creative voices
            (music, art, dance, writing, painting, etc), discussion and
            exploration of your unique creative connection and contribution to
            the world."
            priceList={listData.priceList.defaultPriceList}
            testimonialsList={
              listData.testimonialsList.innerArtistTestimonialsList
            }
          />

          <CoachingSession
            sessionType="For Professionals"
            artistBackground="professionalArtistBackground"
            sessionBackground="professionalSession"
            sessionDescription="Accompanied practices, custom designed exercises to enable
                  performances without medication, exploration on perfection,
                  compliments, and criticisms, working with the ego instead of
                  being controlled by it, recurring dreams, sustainable,
                  self-regulated lifestyle."
            priceList={listData.priceList.defaultPriceList}
            testimonialsList={
              listData.testimonialsList.professionalTestimonialsList
            }
          />

          <CoachingSession
            sessionType="A Gift of Deeper Connections"
            artistBackground="deeperConnectionsBackground"
            sessionBackground="deeperConnectionsSession"
            sessionDescription="An online, self-paced course working to deepen the connection
                  with ourselves, those near us, and the experiences from our
                  past. 21 lessons with guided audio meditation and affirmative
                  journaling for self regulation."
            priceList={listData.priceList.deeperConnectionsPriceList}
            testimonialsList={
              listData.testimonialsList.deeperConnectionsTestimonialsList
            }
          />
        </section>
      </div>
    </Layout>
  </div>
)

export default CoachingPage
