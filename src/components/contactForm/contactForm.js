import React, { Component } from "react"
import contactFormStyles from "./contactForm.module.scss"
import { navigate } from "gatsby"

/* ======== refactor this to use React.useState({}) =========== */
class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.encode = this.encode.bind(this)
  }

  /* 
    Encode function is from the Netlify blog post on integrating a netlify form into a react app, form handling with a stateful react form.

    https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#step-2

  */
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        className={contactFormStyles.form}
        onSubmit={this.handleSubmit}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        action="/success"
      >
        {/* this extra input is needed when using netlify forms */}
        <input type="hidden" name="form-name" value="contct" />
        <input type="hidden" name="bot-field" />

        <p>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>

        <p>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              required
            />
          </label>
        </p>

        <p>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            onChange={this.handleChange}
            value={this.state.subject}
            name="subject"
            list="subjects"
            placeholder="(optional)"
          />
          <datalist id="subjects">
            <option>Embodied Creativity</option>
            <option>Piano / Harpsichord lessons</option>
            <option>Book Heidi for a private event</option>
            <option>Book Heidi & Nabi for a private event</option>
          </datalist>
        </p>

        <p>
          <label htmlFor="phone">
            Phone:
            <input
              type="tel"
              id="phone"
              onChange={this.handleChange}
              value={this.state.phone}
              name="phone"
              placeholder="(optional)"
            />
          </label>
        </p>

        <p className={contactFormStyles.message}>
          <label htmlFor="message">
            Message:
            <textarea
              rows="5"
              required
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
              id="message"
            ></textarea>
          </label>
        </p>

        <button type="submit" className={contactFormStyles.submitButton}>
          Submit
        </button>
      </form>
    )
  }
}

export default ContactForm
