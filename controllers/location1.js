let locationSchema=require("../models/location");

exports.fetchLocations=async(req,res)=>{
   try{
    let result=await locationSchema.find();
       res.status(200).send(result)
   }catch{
        res.status(500).send(`internal server error`)
   }
}