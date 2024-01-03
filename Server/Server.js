const express = require("express");
const mongoose = require("mongoose");
const AuthRoutes =require("./Routes/AuthRoutes")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const earing =require("./Models/earing")
const necklace =require("./Models/necklace")
const bracelet =require('./Models/bracelet')
const app = express();


mongoose.connect('mongodb+srv://anaskhalid:anaskhalid3535@anas.wvrmz4q.mongodb.net/ecommerce').then(()=>{
console.log("mongoos connected succefully")


}).catch((err)=>console.log("eror occur"))






app.get('/api/earing',(req,res)=>{
earing.find((err,data) => {
if(err){
res.status(500).send(err);
}
else{
  res.status(200).send(data);
}
})
})



app.get('/api/necklace',(req,res)=>{
    necklace.find((err,data) => {
  if(err){
  res.status(500).send(err);
  }
  else{
    res.status(200).send(data);
  }
  })
  })
  
  

app.get('/api/bracelet',(req,res)=>{
    bracelet.find((err,data) => {
  if(err){
  res.status(500).send(err);
  }
  else{
    res.status(200).send(data);
  }
  })
  })
  

  
  //checkout form

  //login details
app.use(cors(
{
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true,
}))
app.use(cookieParser())
app.use(express.json());
app.use ("/",AuthRoutes)








app.listen(5000, () => {
  console.log("server start 5000");
});


