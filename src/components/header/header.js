import React, { Component } from "react"
import { Link } from "gatsby"
import cs from "classnames"
import headerStyles from "../header/header.module.scss"

class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <header
        className={cs(headerStyles.header, {
          [headerStyles.homePageHeader]: this.props.page === "home",
        })}
      >
        <Link to="/" className={(headerStyles.link, headerStyles.logo)}>
          {" "}
          <span className={headerStyles.title}>Heidi Tsai</span>
          <span className={headerStyles.subtitle}>Historical Keyboardist</span>
        </Link>

        <label
          htmlFor="nav-toggle"
          //tabIndex="0"
          className={headerStyles.navToggleLabel}
        >
          <span></span>
        </label>

        <input
          type="checkbox"
          id="nav-toggle"
          className={headerStyles.navToggle}
        ></input>

        <nav className={headerStyles.headerNav}>
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
      </header>
    )
  }
}

/*
const Header = props => {
  return (
    <header
      className={cs(headerStyles.header, {
        [headerStyles.homePageHeader]: props.page === "home",
      })}
    >
      <Link to="/" className={(headerStyles.link, headerStyles.logo)}>
        {" "}
        <span className={headerStyles.title}>Heidi Tsai</span>
        <span className={headerStyles.subtitle}>Historical Keyboardist</span>
      </Link>

      <input type="checkbox" className={headerStyles.navToggle}></input>

      <nav className={headerStyles.headerNav}>
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
    </header>
  )
}
*/

export default Header
