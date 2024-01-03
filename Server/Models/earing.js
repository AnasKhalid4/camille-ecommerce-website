const mongoose= require("mongoose")
const earingsSchema=new mongoose.Schema(
{


_id:mongoose.Schema.Types.ObjectId,
img:String,
title:String,
Descripition:String,
Price:String



}


)

module.exports=mongoose.model('earing',earingsSchema)