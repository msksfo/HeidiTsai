import React from "react"
import heidiInfoStyles from "../heidiInfo/heidiInfo.module.scss"

const HeidiInfo = props => {
  return (
    <div className={heidiInfoStyles.heidiInfo}>
      <p className={heidiInfoStyles.contactHeidi}>Get In Touch</p>
      <p>
        Fill out the form for more information on working with Heidi, or for any
        other questions you may have.
      </p>
    </div>
  )
}

export default HeidiInfo
