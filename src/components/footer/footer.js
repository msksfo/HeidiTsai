import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faYoutubeSquare,
  faFacebookSquare,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons"
//import { faYoutubeSquare } from "@fortawesome/free-solid-svg-icons"

import footerStyles from "../footer/footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <div className={footerStyles.footerNav}>
        <div>
          <ul className={footerStyles.footerNavRight}>
            <li>
              <Link className={footerStyles.link} to="/about">
                {" "}
                about
              </Link>
            </li>

            <li>
              <Link className={footerStyles.link} to="/coaching">
                {" "}
                coaching
              </Link>
            </li>
          </ul>
        </div>

        <div className={footerStyles.socialMediaIconsWrapper}>
          {/* https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility */}
          <a
            href="https://www.facebook.com/heidi.tsai.5"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialMediaLink}
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              fixedWidth
              className={footerStyles.facebook}
              aria-hidden="true"
              title="Facebook"
            />
          </a>

          <a
            href="https://www.instagram.com/heiditsaimusic/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialMediaLink}
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              fixedWidth
              className={footerStyles.instagram}
              aria-hidden="true"
              title="Facebook"
            />
          </a>

          <a
            href="https://www.soundcloud.com/heidi-tsai-2"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialMediaLink}
            aria-label="Soundcloud"
          >
            <FontAwesomeIcon
              icon={faSoundcloud}
              fixedWidth
              className={footerStyles.soundcloud}
              aria-hidden="true"
              title="Facebook"
            />
          </a>

          <a
            href="https://www.youtube.com/user/hjtsai7"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.socialMediaLink}
            aria-label="YouTube"
          >
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              fixedWidth
              className={footerStyles.youtube}
              aria-hidden="true"
              title="Facebook"
            />
          </a>
        </div>

        <div>
          <ul className={footerStyles.footerNavLeft}>
            <li>
              <Link className={footerStyles.link} to="/discography">
                discography
              </Link>
            </li>

            <li>
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
