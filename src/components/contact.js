import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./css/contact.css";
import "./css/footer.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          console.log(
            process.env.secrets.REACT_APP_SERVICE_ID +
              " " +
              process.env.secrets.REACT_APP_TEMPLATE_ID +
              " " +
              process.env.secrets.REACT_APP_PUBLIC_KEY
          );
        }
      );
  };
  return (
    <section className="sec-wrapper">
      <div className="page-wrapper">
        <h1 id="page-title">Send Us A Message</h1>
        <h4 id="page-subheading">Use the form below to sign up for a class or get in touch</h4>
        <div className="contact-wrapper">
          <div className="grid-item1">
            <div className="heading-container">
              <h1 id="contact-title">CONTACT US</h1>
              <h2 id="contact-subheading">
                Sign up for a class or get in touch
              </h2>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-container">
              <div className="form-container">
                <h1 id="form-title">SEND US A MESSAGE!</h1>
                <form className="cf" ref={form} onSubmit={sendEmail}>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="from_name"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        name="from_email"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Course code</label>
                      <input
                        type="text"
                        placeholder="Course code"
                        name="course_code"
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone_number"
                      />
                    </div>
                  </div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    type="text"
                    placeholder="Message"
                    required
                  ></textarea>
                  <input type="submit" value="Submit" id="input-submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
