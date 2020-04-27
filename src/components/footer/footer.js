import React from "react"
import footerStyles from "../footer/footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <p>© {new Date().getFullYear()} Heidi Tsai. All Rights Reserved</p>
    </div>
  )
}

export default Footer
