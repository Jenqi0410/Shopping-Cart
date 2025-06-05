import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, SHOW_NOTIFY, HIDE_NOTIFY, UPDATE_QUANTITY} from "./constants";


export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const hideNotify = () => ({
  type: HIDE_NOTIFY,  
});



// Notice
export const showNotify = (message, type = "success") => {
  return (dispatch) => {
    dispatch({
      type: SHOW_NOTIFY,
      payload: { message, type }, 
    });

   setTimeout(() => {
      dispatch({ type: HIDE_NOTIFY });
    }, 3000);
  };
};


export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
});

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};
