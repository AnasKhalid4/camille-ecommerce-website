const ordersModel = require("../Models/ordersModel");


module.exports.orders = async(req,res,next)=>{
    console.log(req.body);
    try{

        const{Firstname,
            Lastname,
            Address,
            email,
            City,
            State,
            Zipcode,
            items}=req.body;
        const user=await ordersModel.create({Firstname,Lastname,Address,email,City,State,Zipcode,items});
        
        }catch(err){
        
        console.log(err);
        }

}