import React from "react";
import "./CartItem.css";
import { useCartContext } from "./cart_context";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CartItem({ id, name, price, counter }) {
  const { removeitem } = useCartContext();

  return (


    <div calss="maindiv">
 

      <div class="div1">
        <text class="txt">{name}</text>
        <text class="txt"> {counter}</text>
        <text class="txt">{price*counter}</text>

        <button class="button" onClick={() => removeitem(id)}>
          <FontAwesomeIcon icon={faTrash} />{" "}
        </button>
      </div>

      <div></div>
    </div>
  );
}

export default CartItem;
