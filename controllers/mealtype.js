const mealtypeSchema=require("../models/meal");

exports.getAllMealtype=async(req,res)=>{
   try{
       let result=await mealtypeSchema.find()
       res.status(200).send(result);
   }catch{
    res.status(500).send(`internal server error`);
   }
}