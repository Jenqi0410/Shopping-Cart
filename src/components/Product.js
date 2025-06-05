import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, showNotify } from "../redux/actions";

export default function Product({ product }) {
  const dispatch = useDispatch();
  
  // State để lưu giá trị số lượng
  const [quantity, setQuantity] = useState(1);

  // Hàm cập nhật số lượng
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);  // Cập nhật số lượng khi thay đổi
    }
  };

  const totalPrice = product.price * quantity;  // Cập nhật giá tiền khi thay đổi số lượng

  return (
    <div className="col-12 mb-4">
      <div className="card shadow-sm d-flex flex-row">
        {/* Hình ảnh sản phẩm */}
        <div className="col-4">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
            style={{ height: "150px", objectFit: "cover" }}
          />
        </div>

        {/* Nội dung sản phẩm: Tên, Mô tả và Số lượng */}
        <div className="col-8 d-flex flex-column justify-content-between p-3">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>

          {/* Input số lượng */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="quantity" className="form-label me-2">
              Số lượng
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control w-auto"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              style={{ width: "60px" }}  // Điều chỉnh chiều rộng của input
            />
          </div>

          <h5 className="fw-bold">{totalPrice} USD</h5> {/* Hiển thị tổng giá sản phẩm */}

          <button
            className="btn btn-primary w-100"
            onClick={() => {
              // Gửi sản phẩm và số lượng vào giỏ hàng
              dispatch(addToCart({ ...product, quantity }));
              dispatch(showNotify(`Đã thêm ${product.name} x${quantity} vào giỏ hàng!`));
            }}
          >
            {product.price} USD
          </button>
        </div>
      </div>
    </div>
  );
}
