import React from "react";
import "./contact.css"; // Create this CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Floating Background Elements */}
      <div className="floating-circles">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Left Side - Contact Information */}
          <div className="col-md-5">
            <div className="contact-info-card">
              <h2 className="mb-4">Get in Touch</h2>
              <div className="info-item hover-float">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Our Office</h4>
                <p>
                  123 Tech Street
                  <br />
                  Innovation Valley, CA 94000
                </p>
              </div>

              <div className="info-item hover-float">
                <div className="icon-box">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Call Us</h4>
                <p>
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri, 9am-5pm PST
                </p>
              </div>

              <div className="info-item hover-float">
                <div className="icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>
                  hello@techinnovate.com
                  <br />
                  support@techinnovate.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-7">
            <div className="contact-form-card">
              <h2 className="mb-4">Send a Message</h2>
              <form>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>

                <button type="submit" className="btn-send">
                  Send Message
                  <div className="send-icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links text-center mt-5">
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
