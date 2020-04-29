import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import aboutStyles from "../styles/about.module.scss"
import heidi1 from "../assets/images/heidi1.jpg"
import heidi2 from "../assets/images/heidi2.jpg"
import heidi5 from "../assets/images/heidi5.jpg"
import harpsichord from "../assets/images/keyboard2.jpg"

//import SEO from "../components/seo"

const AboutPage = () => (
  <div>
    <Layout>
      <section className={aboutStyles.wrapper}>
        <div className={aboutStyles.sectionTitle}>
          <div className={aboutStyles.titleQuote}>Heidi is super awesome</div>

          <div className={aboutStyles.titleImage}>
            <img alt="Heidi" src={heidi1} />
          </div>
        </div>

        <div className={aboutStyles.sectionDividerImage}>
          <img
            className={aboutStyles.harpsichordImage}
            alt="harpsichord"
            src={harpsichord}
          />
        </div>

        <div className={aboutStyles.sectionContent}>
          <div className={aboutStyles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis rutrum quam. Vivamus rhoncus neque sit amet eros cursus,
              blandit lacinia eros sagittis. Vestibulum sit amet malesuada
              lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis rutrum quam. Vivamus rhoncus neque sit amet eros cursus,
              blandit lacinia eros sagittis. Vestibulum sit amet malesuada
              lorem. Maecenas nec erat arcu. Maecenas auctor, neque ac
              sollicitudin tempus, leo diam convallis risus, vel maximus arcu
              metus a dolor. Phasellus suscipit condimentum aliquet. Ut interdum
              mollis leo non consectetur. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nam
              fermentum eget ex congue gravida. Sed blandit eros magna, vel
              tempor quam finibus in. Mauris ut lectus neque. Quisque luctus
              elit felis, id vehicula lorem rutrum in. Etiam quis luctus mauris,
              efficitur dictum ante. Pellentesque nec quam vitae nibh congue
              bibendum ac vitae tellus.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              iaculis rutrum quam. Vivamus rhoncus neque sit amet eros cursus,
              blandit lacinia eros sagittis. Vestibulum sit amet malesuada
              lorem. Maecenas nec erat arcu. Maecenas auctor, neque ac
              sollicitudin tempus, leo diam convallis risus, vel maximus arcu
              metus a dolor. Phasellus suscipit condimentum aliquet. Ut interdum
              mollis leo non consectetur. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>

          <div className={aboutStyles.sectionImages}>
            <ul>
              <li>
                <img src={heidi2} alt="" />
              </li>
              <li>
                <img src={heidi5} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export default AboutPage
