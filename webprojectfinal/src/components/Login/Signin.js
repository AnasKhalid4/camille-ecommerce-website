import React, { useState, useEffect } from "react";
import axios from "axios";
import"./Getlogin.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../cart_context";

import "react-toastify/dist/ReactToastify.css";
function Signin() {
    const [values, setValues] = useState({name:"",email:"",password:""});
    const [cookies] = useCookies([]);
    const navigate = useNavigate();
    const {cart } = useCartContext();
    
    const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
              "/Signin",
              {
                ...values,
                
              },{
                withCredentials:true,
              }
             
            );
            console.log(data)


            if (data) {
                if (data.errors) {
                  const {name, email, password } = data.errors;
                  if (name) generateError(name);
                  else if (email) generateError(email);
                  else if (password) generateError(password);
                } else {
                    navigate("/Login");
                }
              }

          } catch (err) {
            console.log(err);
          }



      };


  return (
   <div>
<Header/>


    <div class="get2"> 
    
    <div className="containerss">
      <h2>Create Account</h2>
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="username"    
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
          Already have an account ?<Link to="/Login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Signin;