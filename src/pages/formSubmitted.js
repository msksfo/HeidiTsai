import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const formSubmitted = () => {
  return (
    <div>
      <Layout>
        {/*  <SEO title="Home" /> */}
        <Head title="Thanks" />

        <div>
          <p>Your form was successfully delivered.</p>
        </div>
      </Layout>
    </div>
  )
}
