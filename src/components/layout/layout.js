/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import layoutStyles from "./layout.module.scss"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = props => {
  return (
    <div className={layoutStyles.wrapper}>
      <a href="#main" className={layoutStyles.skipLink}>
        Skip to content
      </a>
      <Header />

      <div className={layoutStyles.mainWrapper}>
        <main id="main" className={layoutStyles.main}>
          {props.children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
