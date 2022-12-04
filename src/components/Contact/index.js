import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import contactHeader from "../../assets/contact-header.png";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <body className="bg-dark">
      {/* header image */}
      <div className="container-fluid">
        <img className="img-fluid mw-75 mx-auto d-block" src={contactHeader} />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label className="text-info" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default ContactForm;
