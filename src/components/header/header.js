import React, { Component } from "react"
import { Link } from "gatsby"
import cs from "classnames"
import headerStyles from "../header/header.module.scss"

class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false,
      ariaExpanded: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
        ariaExpanded: !prevState.ariaExpanded,
      }
    })
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

        <button
          title="menu"
          aria-label="Mobile navigation button"
          aria-expanded={this.state.ariaExpanded}
          aria-controls="site-navigation"
          className={headerStyles.menuButton}
          onClick={this.toggleMenu}
        >
          <span aria-hidden="true" className={headerStyles.menuIcon}></span>
        </button>

        <nav
          className={cs(headerStyles.headerNav, {
            [headerStyles.headerNavShowing]: this.state.isOpen,
          })}
        >
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <Link
                to="/about"
                className={cs(headerStyles.link, {
                  [headerStyles.linksShowing]: this.state.isOpen,
                })}
              >
                {" "}
                about
              </Link>
            </li>

            <li className={headerStyles.navItem}>
              <Link
                to="/coaching"
                className={cs(headerStyles.link, {
                  [headerStyles.linksShowing]: this.state.isOpen,
                })}
              >
                {" "}
                coaching
              </Link>
            </li>

            <li className={headerStyles.navItem}>
              <Link
                to="/discography"
                className={cs(headerStyles.link, {
                  [headerStyles.linksShowing]: this.state.isOpen,
                })}
              >
                {" "}
                discography
              </Link>
            </li>

            <li className={headerStyles.navItem}>
              <Link
                to="/contact"
                className={cs(headerStyles.link, {
                  [headerStyles.linksShowing]: this.state.isOpen,
                })}
              >
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

export default Header
