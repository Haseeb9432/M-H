import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./navbar.css";
import { useCart } from "../Content/CartContext";

export default function Navbar(props) {
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-lg">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-3 gradient-text" to="/">
            M&H
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link hover-effect" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link hover-effect" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link hover-effect" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link hover-effect" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Icons Section */}
            <div className="d-flex align-items-center gap-4">
              <div className="search-container">
                <FaSearch
                  className="text-white hover-effect"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowSearch(!showSearch)}
                />
                <input
                  className={`search-input ${showSearch ? "active" : ""}`}
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <Link
                to="/cart"
                className="text-white hover-effect position-relative"
              >
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
