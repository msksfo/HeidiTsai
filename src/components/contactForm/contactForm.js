import React from "react"
import contactFormStyles from "./contactForm.module.scss"

// THIS NEEDS TO BE A CLASS COMPONENT SO IT CAN HOLD STATE FOR THE FORM
const ContactForm = () => {
  return (
    <form className={contactFormStyles.form}>
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
        <label for="subject">Subject:</label>
        <input
          type="text"
          id="subject"
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
        <label for="phone">
          Phone:
          <input type="tel" id="phone" name="phone" placeholder="(optional)" />
        </label>
      </p>

      <p className={contactFormStyles.message}>
        <label>
          Message:
          <textarea rows="5" required></textarea>
        </label>
      </p>

      <button className={contactFormStyles.submitButton}>Submit</button>
    </form>
  )
}

export default ContactForm
