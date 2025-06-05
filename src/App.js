import React from "react";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Notify from "./components/Notify";

export default function App() {
  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">MiniProject - Shopping Cart</h2>
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <strong>List Products</strong>
            </div>
            <div className="card-body">
              <ListProduct />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="card">
            <div className="card-header bg-warning text-white">
              <strong>Your Cart</strong>
            </div>
            <div className="card-body">
              <Cart />
            </div>
          </div>
          <Checkout />
        </div>
      </div>

      <Notify />  
    </div>
  );
}
