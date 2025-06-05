import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart, clearCart, showNotify } from "../redux/actions";

export default function Cart() {
  const cartItems = useSelector((state) => state.listCart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find((product) => product.id === itemId);
    dispatch(updateQuantity(itemId, item.quantity + 1));
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((product) => product.id === itemId);
    if (item.quantity > 1) {
      dispatch(updateQuantity(itemId, item.quantity - 1));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    dispatch(showNotify("Product has been removed!", "danger"));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(showNotify("Your Cart is clear ~"));
  };

  const handleUpdateItem = (itemId) => {
    dispatch(showNotify("Update successful!", "success"));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body p-3">
        {cartItems.length === 0 ? (
          <p className="text-muted">Your Cart is empty!</p>
        ) : (
          <div>
            <table className="table table-bordered table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Setting</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price} USD</td>
                    <td>
                      {/* Sử dụng d-flex để căn chỉnh các nút và input nằm ngang */}
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity > 0) {
                              dispatch(updateQuantity(item.id, newQuantity));
                            }
                          }}
                          min="1"
                          style={{ width: "60px", display: "inline-block" }}
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{item.price * item.quantity} USD</td>
                    <td className="d-flex justify-content-between">
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => handleUpdateItem(item.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="text-end fw-bold">
                    Total:
                  </td>
                  <td className="fw-bold">{total} USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning btn-sm"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
