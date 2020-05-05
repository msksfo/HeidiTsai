import React from "react"
import coachingSessionStyles from "../coachingSession/coachingSession.module.scss"
import cs from "classnames"

const CoachingSession = props => {
  return (
    <div className={coachingSessionStyles.coachingSessionWrapper}>
      <h2 className={coachingSessionStyles.sessionType}>{props.sessionType}</h2>

      <div
        data-sessionType={props.sessionType}
        className={cs(
          coachingSessionStyles.sessionBackground,
          coachingSessionStyles[props.artistBackground]
        )}
      >
        <div
          className={cs(
            coachingSessionStyles.session,
            coachingSessionStyles[props.sessionBackground]
          )}
        >
          <p>{props.sessionDescription}</p>

          <details>
            <summary>Pricing Information</summary>
            <ul className={coachingSessionStyles.priceList}>
              <li>One time 20-minute free online consultation</li>
              <li>1 hour: &euro;100</li>
              <li>Package of 5 sessions (recommended): &euro;450</li>
            </ul>
          </details>
        </div>
      </div>
      <ul className={coachingSessionStyles.testimonialsList}>
        <li>
          <figure>
            "I would recommend it to anybody. There are valuable takeaways for
            everyone."
            <figcaption>Gary / teacher - Naperville, USA</figcaption>
          </figure>
        </li>

        <li>
          <figure>
            "It has significantly opened my mind, heart, eyes and ears to my
            surroundings, the people around me, my feelings, desires, words and
            actions..."
            <figcaption>
              Merrie / German and ESL trainer - Hanau, Germany
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  )
}

export default CoachingSession
