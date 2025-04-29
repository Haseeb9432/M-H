import React from "react";
import "./About.css";
import member1 from "../images/member1.webp";
import member2 from "../images/member2.webp";
import member3 from "../images/member3.webp";
import member4 from "../images/member4.webp";

const values = [
  {
    icon: "fas fa-lightbulb",
    title: "Innovation Engine",
    description:
      "Pioneering AI-driven solutions that learn and evolve with user interactions",
  },
  {
    icon: "fas fa-brain",
    title: "Cognitive Computing",
    description:
      "Implementing neural networks that mimic human decision-making processes",
  },
  {
    icon: "fas fa-rocket",
    title: "Rapid Prototyping",
    description:
      "From concept to MVP in 72 hours using our agile development frameworks",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Ethical AI",
    description:
      "Responsible technology development with built-in bias detection systems",
  },
  {
    icon: "fas fa-infinity",
    title: "Sustainable Tech",
    description:
      "Carbon-neutral cloud solutions powered by renewable energy algorithms",
  },
];
const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-bg"></div>
        <div className="container text-center">
          <h1 className="hero-title mb-4">About Our Vision</h1>
          <p className="hero-subtitle">
            Crafting Digital Experiences That Inspire
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="interactive-card">
                <h2 className="mb-4">Our Story</h2>
                <p className="lead">
                  Founded in 2020, we started as a small team passionate about
                  creating meaningful digital experiences. Today, we've grown
                  into an innovative agency helping brands transform their
                  digital presence.
                </p>
                <div className="sparkle-animation"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="floating-image">
                <img
                  src="https://ipa.gov.tr/wp-content/uploads/confident-business-team-with-leader-1536x1024.jpg"
                  alt="Our Team"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Meet the Team</h2>
          <div className="row">
            {[member1, member2, member3, member4].map(
              (
                memberImg,
                index // Fixed here
              ) => (
                <div className="col-md-3 mb-4" key={index}>
                  <div className="team-member-card">
                    <div className="member-image">
                      <img
                        src={memberImg}
                        alt={`Team Member ${index + 1}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="member-info">
                      <h4>John Doe</h4>
                      <p>Position</p>
                      <div className="social-links">
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Tech Innovations</h2>
          <div className="row justify-content-center">
            {values.map((value, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="value-card h-100">
                  <div className="value-icon">
                    <i className={`${value.icon} fa-3x`}></i>
                  </div>
                  <h3 className="mt-3">{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="innovation-badge">
                    <span>Patent Pending</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
