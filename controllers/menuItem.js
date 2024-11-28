let menu= require("../models/menu");

exports.MenuApi=async(req,res)=>{
    try{
        let result=await menu.find({name:req.params.name})
        res.status(200).send(result);

    }catch{
        res.status(500).send("internal server error");
    }

}