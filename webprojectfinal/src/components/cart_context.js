import { createContext, useContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";
import reducer from "./cartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CartContext = createContext();
const getlocaldata = () => {
  let newcartdata = localStorage.getItem("cartvalue");
  // if(newcartdata ===[]){
  //   return [];

  // }else{

  // return JSON.parse(newcartdata);

  // }

  const parsedData = JSON.parse(newcartdata);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  //cart:[],
  cart: getlocaldata(),
  total_item: "",
  total_amount: "",
  shipping_fee: 250,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (counter, products, total) => {
    dispatch({ type: "ADD_TO_CART", payload: { counter, products, total } });
    toast.success(" Successfully added", { autoClose: 1000 });
  };

  const removeitem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("cartvalue", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeitem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
