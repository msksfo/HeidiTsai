import React from "react"
import { Link } from "gatsby"
import headerStyles from "../header/header.module.scss"

const Header = () => {
  return (
    <nav>
      <Link to="/" className={(headerStyles.link, headerStyles.logo)}>
        {" "}
        <span className={headerStyles.title}>Heidi Tsai</span>
        <span className={headerStyles.subtitle}>Historical Keyboardist</span>
      </Link>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <Link to="/about" className={headerStyles.link}>
            {" "}
            about
          </Link>
        </li>

        <li className={headerStyles.navItem}>
          <Link to="/coaching" className={headerStyles.link}>
            {" "}
            coaching
          </Link>
        </li>

        <li className={headerStyles.navItem}>
          <Link to="/discography" className={headerStyles.link}>
            {" "}
            discography
          </Link>
        </li>

        <li className={headerStyles.navItem}>
          <Link to="/contact" className={headerStyles.link}>
            {" "}
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
