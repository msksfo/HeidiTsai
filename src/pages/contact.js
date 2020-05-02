import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import HeidiInfo from "../components/heidiInfo/heidiInfo"
import ContactForm from "../components/contactForm/contactForm"

import contactStyles from "../styles/contact.module.scss"

//import SEO from "../components/seo"

const ContactPage = () => (
  <div>
    <Layout>
      <div className={contactStyles.wrapper}>
        <div className={contactStyles.formWrapper}>
          <HeidiInfo />

          <ContactForm />
        </div>
      </div>
    </Layout>
  </div>
)

export default ContactPage
