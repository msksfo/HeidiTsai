import React from "react"
import { Link } from "gatsby"
import footerStyles from "../footer/footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <div className={footerStyles.footerNav}>
        <div>
          <ul className={footerStyles.footerNavRight}>
            <li className={footerStyles.navItem}>
              <Link className={footerStyles.link} to="/about">
                {" "}
                about
              </Link>
            </li>

            <li className={footerStyles.navItem}>
              <Link className={footerStyles.link} to="/coaching">
                {" "}
                coaching
              </Link>
            </li>
          </ul>
        </div>

        <div> social links here</div>

        <div>
          <ul className={footerStyles.footerNavLeft}>
            <li className={footerStyles.navItem}>
              <Link className={footerStyles.link} to="/discography">
                discography
              </Link>
            </li>

            <li className={footerStyles.navItem}>
              <Link className={footerStyles.link} to="/contact">
                {" "}
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <small className={footerStyles.copyright}>
        © {new Date().getFullYear()} Heidi Tsai. All Rights Reserved
      </small>
    </div>
  )
}

export default Footer
