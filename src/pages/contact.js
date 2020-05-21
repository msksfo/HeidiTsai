import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import HeidiInfo from "../components/heidiInfo/heidiInfo"
import ContactForm from "../components/contactForm/contactForm"

import contactStyles from "../styles/contact.module.scss"

//import SEO from "../components/seo"

const ContactPage = () => (
  <div>
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.wrapper}>
        <div className={contactStyles.media}>
          <p>
            To promoters and concert organizers, high resolution photos can be
            found on Dropbox.
          </p>
          <a
            href="https://www.dropbox.com/sh/ccnrq4da70jvud1/AAAR3KyOa8lbbTys5vM1dQaHa?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            title="Opens new tab"
          >
            See media assets
          </a>
        </div>
        <div className={contactStyles.formWrapper}>
          <HeidiInfo />

          <ContactForm />
        </div>
      </div>
    </Layout>
  </div>
)

export default ContactPage
