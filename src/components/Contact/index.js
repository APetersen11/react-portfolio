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
    <body className="bg-dark mx-auto">
      {/* header image */}
      <div className="img-fluid mw-75 mx-auto d-flex justify-content-center">
        <img className="img-fluid mw-75 d-block" src={contactHeader} />
      </div>
      <div className="container mx-auto">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col mx-auto p-4">
            <div className="card border-info bg-dark p-3 align-items-center">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className= 'p-3 align-items-center'>
                  <label className="text-info p-2" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="Name"
                    defaultValue={name}
                    onBlur={handleChange}
                  />
                </div>
                <div className= 'p-3 align-items-center'>
                  <label className="text-info p-2" htmlFor="email">
                    Email address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  />
                </div>
                <div className= 'p-3 align-items-center'>
                  <label className="text-info p-2 align-top" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    name="Message"
                    rows="5"
                    defaultValue={message}
                    onBlur={handleChange}
                  />
                </div>
                {errorMessage && (
                  <div>
                    <p className="error-text text-info">{errorMessage}</p>
                  </div>
                )}
                <div className="text-center">
                <button
                  data-testid="button"
                  type="submit"
                  className="btn btn-outline-info"
                >
                  Submit
                  
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default ContactForm;
