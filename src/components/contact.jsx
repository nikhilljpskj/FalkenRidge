import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import '../styles/style.css';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0f1kwhp", "template_bmenrbr", e.target, "4407riNHulQj95uxD")
      .then(
        (result) => {
          alert("Message sent successfully!");
          clearState();
          window.location.reload(); // Refreshes the page
        },
        (error) => {
          alert("Could not send the message at the moment. Please contact us via email or phone.");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* Your form structure remains the same */}
      <div id="contact" className="footer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get a Quote/Book an Appointment</h2>
                <p className="contact-para">
                  Please fill out the form below to contact us and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email or Mobile"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p className="contact-para">
                <span>
                  <i className="fas fa-map-marker-alt"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p className="contact-para">
                <span>
                  <i className="fas fa-phone-alt"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p className="contact-para">
                <span>
                  <i className="fas fa-envelope"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
            
          <div className="col-md-12">
            <div className="row">
              <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : "/"} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "/"} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.linkedin : "/"} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Falken Ridge Ventures.{" "}
            <a href="https://redeemertechnologies.com/" rel="nofollow"></a>
          </p>
        </div>
      </div>
    </div>
  );
};
