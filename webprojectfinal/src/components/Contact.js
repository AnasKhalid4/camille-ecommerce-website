import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [detail,setdetail]=useState([]);
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
          }, 
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
         
          setdetail(data.user)
          console.log(data)
      }
   
    };
    verifyUser();
   
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <Header/>
    <div style={{background:"gray",height:"200px"}}>
      
        <h1>Hi Welcome</h1>
       <h7>{detail}</h7>
        <button onClick={logOut}>Log out</button>
      </div>
      <ToastContainer />
      <Footer/>
    </>
  );
}