import React, { useState, useHistory, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Checkoutpage.css";
import CartCheckout from "./CartCheckout";
import { useCartContext } from "../cart_context";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import FormatPrice from "./Formatprice";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
function Checkoutpage() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [detail, setdetail] = useState([]);

  const { total_price, shipping_fee } = useCartContext();

  let odertotal = total_price + shipping_fee;

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else setdetail(data.user);
        console.log(data);
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const { cart } = useCartContext();
  const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    Address: "",
    email: "",
    City: "",
    State: "",
    Zipcode: "",
    items: cart,
  });
  console.log(cart);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/Checkoutpage",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          
        }
      }
    } catch (err) {}
  };
  return (
    <div>
      <Header />

      <div class="dividepage">
        <div>
          <div className="containerss">
            <h2>Billing Address</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                name="Firstname"
                placeholder="Firstname"
                required
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />

              <input
                type="text"
                name="Lastname"
                placeholder="Lastname"
                required
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />

              <div>
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  required
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  class="input1"
                  type="text"
                  placeholder="City"
                  name="City"
                  required
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  class="input1"
                  type="text"
                  placeholder="State"
                  name="State"
                  required
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  class="input1"
                  type="text"
                  placeholder="Zipcode"
                  name="Zipcode"
                  required
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <button class="button1" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="itemspage">
          <div class="yourcart">
            <h3> Your Cart</h3>
          </div>

          {cart.map((curElem) => {
            return <CartCheckout key={curElem.id} {...curElem} />;
          })}

          <div class="txtss">
            <div>
              <p> SubTotal: PKR {total_price}</p>
            </div>

            <div>
              <p>Shipping Fee :PKR {shipping_fee}</p>
            </div>
            <br></br>
            <div>
              <p>Order Total: PKR {odertotal}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkoutpage;
