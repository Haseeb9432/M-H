import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // External CSS for custom styles
import Products from "./Products";

const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="home-container">
      {/* Hero Section with Carousel */}
      <section className="hero-carousel custom-carousel-wrapper">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="https://avatars.mds.yandex.net/get-altay/4667561/2a0000017822775fc8ad75565e52257bffbd/XXXL"
              alt="Technology"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="http://dslv9ilpbe7p1.cloudfront.net/bbCbB0jCzpk-OKtrQnbpDw_store_banner_image.jpeg"
              alt="Coding"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://www.thefashionisto.com/wp-content/uploads/2013/11/rj-king.jpg"
              alt="Innovation"
              className="carousel-image"
            />
          </div>
        </Slider>
        <div className="carousel-overlay">
          <h1>Welcome to Our Tech World</h1>
          <p>Innovating the future, one line of code at a time.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container text-center py-5">
        <h2 className="section-title mb-5">Our Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <i className="bi bi-lightning-charge-fill icon"></i>
            <h3 className="mt-3 interactive-heading">Fast Performance</h3>
            <p>Experience lightning-fast speed with modern tech.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-brush icon"></i>
            <h3 className="mt-3 interactive-heading">Creative Design</h3>
            <p>Clean and elegant UI designed with user experience in mind.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-lock-fill icon"></i>
            <h3 className="mt-3 interactive-heading">Secure Platform</h3>
            <p>Your data is protected with top-tier security protocols.</p>
          </div>
        </div>
      </section>
      <section className="features container text-center py-5">
        <h2 className="section-title mb-5">Our Products</h2>
      <Products />
      </section>
      {/* About Section */}
      <section className="about container-fluid py-5 bg-light">
        <div className="container text-center px-5">
          <h2 className="mb-4 text-black section-title">Who We Are</h2>
          <p className="lead text-secondary">
            We are a team of passionate developers and designers committed to
            creating intuitive, scalable, and high-performing digital solutions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-4 bg-dark text-light">
        <p className="mb-0">&copy; 2025 TechCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
