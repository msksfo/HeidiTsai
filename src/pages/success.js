import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"
import successStyles from "../styles/success.module.scss"

const Success = () => {
  return (
    <div>
      <Layout>
        {/*  <SEO title="Home" /> */}
        <Head title="Thanks" />

        <div className={successStyles.wrapper}>
          <p>
            Your message has been sent. I will be in touch with you shortly.
            <br></br>
            <span className={successStyles.signature}>Heidi</span>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Success
