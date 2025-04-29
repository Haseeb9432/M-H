import React from "react";
import { products } from "../data";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Products = () => {
  const { addToCart } = useCart();
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 mb-4">
            <div className="card shadow-sm border-0 rounded h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-black fw-bold">
                  {product.title.slice(0, 50)}
                </h5>
                <p className="card-text text-muted small">
                  {product.description.slice(0, 120)}
                </p>
                <p className="badge bg-secondary">{product.category}</p>
                <p className="card-text text-warning fw-bold">
                  ⭐ {product.rating.count} Reviews
                </p>
                <p className="card-text fs-5 text-success fw-bold">
                  ${product.price}
                </p>
                <div className="d-flex justify-content-around mt-3">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <button className="btn btn-outline-info text-black btn-sm">
                      View Details
                    </button>{" "}
                  </Link>
                  <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
