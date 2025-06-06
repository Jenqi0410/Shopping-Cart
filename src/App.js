import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import ListProduct from "./components/ListProduct";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Notify from "./components/Notify";

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const res = await axios.get("http://localhost:8080/api/v1/products", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={fetchProducts} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="container my-4">
                <h2 className="fw-bold mb-4">MiniProject - Shopping Cart</h2>
                <div className="row">
                  <div className="col-12 col-md-7">
                    <div className="card">
                      <div className="card-header bg-primary text-white">
                        <strong>List Products</strong>
                      </div>
                      <div className="card-body">
                        <ListProduct products={products} fetchProducts={fetchProducts} />
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
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
