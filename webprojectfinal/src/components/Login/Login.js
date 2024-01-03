import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "./Getlogin.css"
import { useCartContext } from "../cart_context";

function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  
  const { cart } = useCartContext();

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "/Login",
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
          navigate("/Contact" );
        }
      }
    } catch (err) {
      
    }
  };
  return (
    <div>
    <Header/>
    
    
        <div class="get2"> 
        
        <div className="containerss">
          <h2>Login</h2>
          <form  onSubmit={(e) => handleSubmit(e)}>
         
           
    
            <div>
          
              <input
                type="email"
                name="email"
                placeholder="Email"
            required
               
                onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }      
              />
            </div>
    
    
           
            <div>
             
              <input class="input1"
                type="password"
                placeholder="Password"
                name="password"
            required
             
                onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  } 
              />
            </div>
    
    
    
            <button  class="button1" type="submit">Submit</button>
            <span>
             create new account ?<Link to="/Signin"> Sign up</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
        </div>
        <Footer/>
        </div>
  );
}

export default Login;