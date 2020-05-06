import React, { Component } from "react"
import contactFormStyles from "./contactForm.module.scss"

// THIS NEEDS TO BE A CLASS COMPONENT SO IT CAN HOLD STATE FOR THE FORM
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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {}

  render() {
    return (
      <form
        className={contactFormStyles.form}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        action="/success"
      >
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

        <button className={contactFormStyles.submitButton}>Submit</button>
      </form>
    )
  }
}

export default ContactForm
