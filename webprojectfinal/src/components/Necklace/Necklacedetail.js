import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useParams, Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Necklacedetail.css";

import { useCartContext } from "../cart_context";

function Necklacedetail() {
  const { _id } = useParams();

  const { addToCart } = useCartContext();

  const [products, setproduct] = useState();
  useEffect(() => {
    fetch("/api/necklace")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const newproduct = data.find((item) => item._id === _id);
        console.log(newproduct);
        setproduct(newproduct);
      });
  }, []);

  let total;
  let t_price;
  let P__id;
  let p_titile;
  let p_;

  const [counter, setCounter] = useState(1);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decerement = () => {
    setCounter((count) => Math.max(count - 2, 1));
  };

  //   const [cart, setcart]=useState([])
  // console.log(cart)
  // const addTocart=(data)=>{

  // setcart([...cart , data,counter])

  //}

  t_price = products?.Price;
  total = t_price * counter;
  return (
    <div class="maindiv">
      <Header />

      <div class="title"> Necklaces</div>

      <div class="flexdiv">
        <div class="pic">
          <img src={products?.img}></img>
        </div>

        <div class="detail">
          <text>{products?.title}</text>
          <br></br>
          <br></br>
          <br></br>
          <text>Rs.{(t_price = products?.Price)}</text>

          <br></br>
          <br></br>
          <br></br>

          <button class="counter" onClick={Increment}>
            +
          </button>
          <text> {counter} </text>
          <button class="counter" onClick={Decerement}>
            -
          </button>

          <br></br>
          <br></br>

          <Link onClick={() => addToCart(counter, products, total)}>
            <button class="design"> Add TO CART </button>{" "}
          </Link>
          <ToastContainer/>
          <br></br>
          <br></br>

          <text>DESCRIPTION:</text>
          <br></br>
          <br></br>
          <p>{products?.Descripition}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Necklacedetail;
