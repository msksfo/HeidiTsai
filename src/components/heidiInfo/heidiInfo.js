import React from "react"
import heidiInfoStyles from "../heidiInfo/heidiInfo.module.scss"

const HeidiInfo = props => {
  return (
    <div className={heidiInfoStyles.heidiInfo}>
      <p className={heidiInfoStyles.contactHeidi}>Get In Touch</p>
      <p>{props.email}</p>
      <tel>{props.phoneNumber}</tel>
    </div>
  )
}

export default HeidiInfo
