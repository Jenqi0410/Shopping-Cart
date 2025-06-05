import { combineReducers } from "redux";
import listCart from "./listCart";
import notify from "./notify"; 

const rootReducer = combineReducers({
  listCart,
  notify,  
});

export default rootReducer;
