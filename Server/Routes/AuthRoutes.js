
const {Signin,Login} =require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/Authmiddleware");
const { orders } = require("../Controllers/ordersController");

const router =require("express").Router();

                  
router.post("/",checkUser)
router.post("/Signin",Signin);
router.post("/Login",Login);
router.post("/Checkoutpage", orders);
module.exports=router;