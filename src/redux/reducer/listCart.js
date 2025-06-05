import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_QUANTITY } from "../constants";

// Giỏ hàng bắt đầu rỗng, nhưng ta sẽ lấy giỏ hàng từ localStorage nếu có
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const listCart = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        newState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newState = [...state, { ...action.payload, quantity: action.payload.quantity }];
      }
      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case REMOVE_FROM_CART:
      newState = state.filter((item) => item.id !== action.payload);
      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case UPDATE_QUANTITY:
      newState = state.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case CLEAR_CART:
      // Xóa giỏ hàng khỏi state và localStorage
      localStorage.removeItem("cart");
      return [];

    default:
      return state;
  }
};

export default listCart;
