import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../cart_context";
function Header() {
  const { cart } = useCartContext();

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <div className="navbar">
        <img
          src="https://cdn.shopify.com/s/files/1/1239/1628/files/camille_logo_720x.jpg?v=1613701481"
          alt="display"
        />
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link to="/Home">Home</Link>
          </li>

          <li class="dropdown">
            <li class="dropbtn">shop</li>
            <div class="dropdown-content">
              <Link to="/Earings">Earings</Link>
              <Link to="/Necklace">Necklaces</Link>
              <Link to="/Braclets">Bracelets</Link>
            </div>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span class="cartcount"> {cart.length} </span>
            </Link>
          </li>

          <Link to="/Contact">
            <li>Login</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </>
  );
}

export default Header;
