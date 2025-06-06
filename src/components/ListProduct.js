import React from "react";
import Product from "./Product";

export default function ListProduct({ products, fetchProducts }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} product={product} fetchProducts={fetchProducts} />
      ))}
    </div>
  );
}