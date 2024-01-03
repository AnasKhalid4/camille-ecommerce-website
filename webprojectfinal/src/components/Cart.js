import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { useCartContext } from "./cart_context";
import Earingsproductdetail from "./Earings/Earingsproductdetail";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCartContext();
 
  console.log(
    "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
   cart
  );

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div style={{ background: "whitesmoke" }}>
          <h2 class="cartname"> Your cart is empty </h2>
          <div class="griding">
            <div></div>
            <div class="emptycart">
              <div class="circle">
                <h1>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="gray"
                    size="2x"
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />

      <div class="divhead">
        <h2 class="head">Shopping Cart</h2>
      </div>

      <div class="divcart">
      <div class="divnames">

<text class="txtnames">Items</text>
<text class="txtnames"> Total</text>
<text class="txtnames">Price</text>
<text class="txtnames">Delete</text>
</div>
        <div>
          {cart.map((curElem) => {
            return <CartItem key={curElem._id} {...curElem} />;
          })}

          <div style={{ textAlign: "right" }}>


            <Link to={"/Checkoutpage/" + cart} >
              {" "}
              <button class="designcheckout">checkout</button>
            </Link>
            


          </div>

          <div class="empty"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
