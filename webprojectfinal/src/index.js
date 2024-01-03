import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Necklace from "./components/Necklace/Necklace";
import Necklacedetail from "./components/Necklace/Necklacedetail";
import Braclets from "./components/Bracelets/Braclets";
import Braceletsdetails from "./components/Bracelets/Braceletsdetails";
import Checkoutpage from "./components/CartCheckout/Checkoutpage";
import Login from "./components/Login/Login"
import Signin  from "./components/Login/Signin"
import "./index.css";
import Shop from "./components/Shop/Shop";
import Earings from "./components/Earings/Earings";
import reportWebVitals from "./reportWebVitals";
import Earingsproductdetail from "./components/Earings/Earingsproductdetail";
import Cart from "./components/Cart";
import cartReducer from "./components/cartReducer";
import cart_context from "./components/cart_context";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./components/cart_context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Earings",
    element: <Earings />,
  },

  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Braclets",
    element: <Braclets />,
  },
  {
    path: "/Footer",
    element: <Footer />,
  },

  {
    path: "/Header",
    element: <Header />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },

  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Necklace",
    element: <Necklace />,
  },

  {
    path: "/Checkoutpage/:cart",
    element: <Checkoutpage />,
    
  },
  


  {
    path: "/Earingsproductdetail/:_id",
    element: <Earingsproductdetail />,
  },
  {
    path: "/Necklacedetail/:_id",
    element: <Necklacedetail />,
  },
  {
    path: "/Braceletsdetails/:_id",
    element: <Braceletsdetails />,
  },

  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/cartReducer",
    element: <cartReducer />,
  },

  {
    path: "/cart_context",
    element: <cart_context />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signin",
    element: <Signin/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);


