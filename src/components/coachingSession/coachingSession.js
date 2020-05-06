import React from "react"
import coachingSessionStyles from "../coachingSession/coachingSession.module.scss"
import cs from "classnames"

import UnorderedList from "../list/list"

const CoachingSession = props => {
  return (
    <div className={coachingSessionStyles.coachingSessionWrapper}>
      <h2 className={coachingSessionStyles.sessionType}>{props.sessionType}</h2>

      <div
        data-sessiontype={props.sessionType}
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

            <UnorderedList
              listStyle="priceListStyle"
              listType={props.priceList}
            />
          </details>
        </div>
      </div>

      <UnorderedList
        listStyle="testimonialsList"
        listType={props.testimonialsList}
      />
    </div>
  )
}

export default CoachingSession
