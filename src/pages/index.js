import React, { Component } from "react"

import Layout from "../components/layout/layout"

//import Image from "../components/image"
//import SEO from "../components/seo"

import indexStyles from "../styles/index.module.scss"
import landingPageVideo from "../assets/videos/backgroundVideo.mp4"
import landingPagePoster from "../assets/images/videoStill.png"

// https://youtu.be/e3StH0KLKR4  heidi youtube video
// https://www.youtube.com/watch?v=e3StH0KLKR4

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/*  <SEO title="Home" /> */}

          <div className={indexStyles.videoContainer}>
            <video autoPlay loop muted poster={landingPagePoster}>
              <source src={landingPageVideo} type="video/mp4" />
            </video>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndexPage
