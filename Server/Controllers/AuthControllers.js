const UserModel = require("../Models/UserModel");
const jwt =require("jsonwebtoken")



const maxAge =1*24*60*60;
const createToken =(id)=>{
return jwt.sign({id},"999982",{
expiresIn:maxAge,

})}



const handleErrors= (err)=>{

let errors= {name:"", email:"" ,password:""};
if (err.message === "incorrect email") {
    errors.email = " Email is invalid";
  }

  if (err.message === "incorrect password") {
    errors.password = "Password is invalid";
  }


if (err.code===11000){
errors.email="Email is already register"
return errors;
}



if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }


return errors;
}


module.exports.Signin=async(req,res,next)=>{

    try{

        const{name ,email,password}=req.body;
        const user=await UserModel.create({name,email,password});
        const token = createToken(user._id);
        res.cookie("jwt",token,{  wihtCrdentials:true,httpOnly:false,maxAge:maxAge*1000,
        })
        res.status(201).json({user:user._id,created:true})
        
        }catch(err){
        
        console.log(err);
        const errors=handleErrors(err);
        res.json({errors,created:false})
        }
        
        
        




}






module.exports.Login=async(req,res,next)=>{


    const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }


}