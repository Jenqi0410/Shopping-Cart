import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SHOW_NOTIFY,
  HIDE_NOTIFY,
  UPDATE_QUANTITY,
  SET_CART,
} from "./constants";

import * as cartApi from "../api/cartApi";

// ===== Basic Redux Actions =====
export const clearCart = () => ({ type: CLEAR_CART });

export const hideNotify = () => ({ type: HIDE_NOTIFY });

export const showNotify = (message, type = "success") => {
  return (dispatch) => {
    dispatch({ type: SHOW_NOTIFY, payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: HIDE_NOTIFY });
    }, 3000);
  };
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export const fetchCartFromApi = () => async (dispatch) => {
  try {
    const res = await cartApi.getCart();
    dispatch({ type: SET_CART, payload: res.data });
  } catch (error) {
    console.error("Fetch cart failed:", error);
    dispatch(showNotify("Failed to load cart", "danger"));
  }
};

export const addToCartApi = (product) => async (dispatch) => {
  try {
    const res = await cartApi.addToCart(product);
    dispatch({ type: ADD_TO_CART, payload: res.data });
    dispatch(showNotify("Product added to cart"));
  } catch (err) {
    dispatch(showNotify("Failed to add to cart", "danger"));
  }
};

export const updateQuantityApi = (id, quantity) => async (dispatch) => {
  try {
    await cartApi.updateCartItem(id, quantity);
    dispatch(updateQuantity(id, quantity));
    dispatch(showNotify("Quantity updated"));
  } catch (err) {
    dispatch(showNotify("Update failed", "danger"));
  }
};

export const removeFromCartApi = (id) => async (dispatch) => {
  try {
    await cartApi.removeFromCart(id);
    dispatch(removeFromCart(id));
    dispatch(showNotify("Item removed"));
  } catch (err) {
    dispatch(showNotify("Failed to remove item", "danger"));
  }
};

export const clearCartApi = () => async (dispatch) => {
  try {
    await cartApi.clearCart();
    dispatch(clearCart());
    dispatch(showNotify("Cart cleared"));
  } catch (err) {
    dispatch(showNotify("Failed to clear cart", "danger"));
  }
};
