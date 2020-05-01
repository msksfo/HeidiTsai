import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import HeidiInfo from "../components/heidiInfo/heidiInfo"

import contactStyles from "../styles/contact.module.scss"

//import SEO from "../components/seo"

const ContactPage = () => (
  <div>
    <Layout>
      <div className={contactStyles.wrapper}>
        <div className={contactStyles.formWrapper}>
          <HeidiInfo phoneNumber="111-222-3333" email="heidi@something.com" />

          {/*
          <div className={contactStyles.heidiInfo}>
            <p className={contactStyles.contactHeidi}>Get In Touch</p>
            <p>heidi@something.com</p>
            <tel>515-324-9848</tel>
          </div>
          */}
          <form className={contactStyles.form}>
            <p>
              <label for="name">
                Name:
                <input type="text" id="name" name="name" required />
              </label>
            </p>

            <p>
              <label for="email">
                Email:
                <input type="email" id="email" name="email" required />
              </label>
            </p>

            <p>
              <label for="phone">
                Phone:
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(optional)"
                />
              </label>
            </p>

            <p className={contactStyles.message}>
              <label>
                Message:
                <textarea rows="5" required></textarea>
              </label>
            </p>

            <button className={contactStyles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  </div>
)

export default ContactPage
