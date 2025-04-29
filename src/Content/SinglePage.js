import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

const SinglePage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-danger mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-black fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <p className="badge bg-secondary fs-6">{product.category}</p>
          <p className="text-warning fw-bold">
            ⭐ {product.rating.count} Reviews
          </p>
          <h4 className="text-success fw-bold">${product.price}</h4>
          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-outline-primary">Add to Cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
