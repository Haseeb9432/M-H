import React from "react";
import { useCart } from "./CartContext";
import { FaTimes } from "react-icons/fa";
import "./CartPage.css";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, addToCart, removeFromCart, cartCount } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div className="cart-page container py-5">
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8 mb-4">
          <h2 className="mb-4">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="alert alert-info">Your cart is empty</div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid cart-item-image"
                        />
                      </div>
                      <div className="col-md-4">
                        <h5 className="mb-1">{item.title}</h5>
                        <small className="text-muted">
                          Category: {item.category}
                        </small>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="quantity-controls">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => removeFromCart(item)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => addToCart(item)}
                            >
                              +
                            </button>
                          </div>
                          <div className="text-end">
                            <div className="price">
                              {formatCurrency(item.price * item.quantity)}
                            </div>
                            <button
                              className="btn btn-link text-danger"
                              onClick={() => removeFromCart(item, true)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-end mt-4">
                <Link to="/products" className="btn btn-outline-primary">
                  Back to shop
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Order Summary - Remains same as previous */}
        <div className="col-lg-4">
          <div className="summary-card card p-4">
            <h5 className="mb-4">Summary</h5>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>ITEMS {cartCount}</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>SHIPPING</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <small className="text-muted">Standard Delivery</small>
            </div>

            <div className="mb-4">
              <label htmlFor="promo-code" className="form-label">
                GIFT CODE
              </label>
              <input
                type="text"
                className="form-control"
                id="promo-code"
                placeholder="Enter your code"
              />
            </div>

            <div className="border-top pt-3 mb-4">
              <div className="d-flex justify-content-between fw-bold">
                <span>TOTAL PRICE</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <button className="btn btn-primary w-100 py-3">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
