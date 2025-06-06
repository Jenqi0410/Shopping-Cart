import axios from "axios";

const API = "http://localhost:8080/api/cart"; 

export const getCart = () => axios.get(API);
export const addToCart = (product) => axios.post(API, product);
export const updateCartItem = (id, quantity) => axios.put(`${API}/${id}`, { quantity });
export const removeFromCart = (id) => axios.delete(`${API}/${id}`);
export const clearCart = () => axios.delete(API);
