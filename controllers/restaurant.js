const restSchema= require("../models/rest");
exports.restApi=async(req,res)=>{
    try{
        let result=await restSchema.find();
      res.status(200).send(result)
    }catch{
        res.status(500).send(`internal server error`);
    }
}

exports.findByCityApi=async(req,res)=>{
    try{
         let result= await restSchema.find({city:req.params.city})
         res.status(200).send(result)
    }catch{
        res.status(500).send(`internal server error`)
    }
}

exports.findByLocationIdApi=async(req,res)=>{
    try{
         let result= await restSchema.find({location_id:req.params.location_id})
         res.status(200).send(result)
    }catch{
        res.status(500).send(`internal server error`)
    }  
}

exports.findMealtypeById=async(req,res)=>{
    try{
        let result=await restSchema.find({mealtype_id:req.params.mealtype_id})
        res.status(200).send(result);
    }catch{
     res.status(500).send(`internal server error`);
    }
 }

exports.findByIdApi=async(req,res)=>{
    try{
         let result= await restSchema.findById({_id:req.params._id})
         res.status(200).send(result)
    }catch{
        res.status(500).send(`internal server error`)
    }
}

exports.getAllRestaurantsByQuery = async (req,res) =>{
    try{
        const {mealtype_id, city, cuisine, min_price, sort, location_id} = req.query;
        const query = {};
        if(city) query.city = city;
        if(mealtype_id) query.mealtype_id = Number(mealtype_id);
        if(location_id) query.location_id = Number(location_id);
        if (cuisine) {
            query.cuisine =  { $elemMatch: { name: cuisine } };
        }
        
        if(min_price){
            query.min_price= {$gte : Number(min_price)};
        }

        const sortOptions = {};
        if(sort){
            sortOptions[sort] = 1;
        }

        const restaurants = await restSchema.find(query).sort(sortOptions).exec();

        res.json(restaurants);
    } catch (error){
        console.log(error);
        res.status(500).json({error:error});
    }
}

exports.filter = async (req,res) =>{
    try {
        const {location_id, mealtype_id, cuisine_id, sort, lcost, hcost} =  req.body
        const query = {}


        if(location_id) query.location_id = location_id
        if(mealtype_id) query.mealtype_id = mealtype_id
        if(cuisine_id && cuisine_id.length > 0){
            query.cuisine = { $elemMatch: { id: {$in : cuisine_id} } };
        } 

        if(lcost!== undefined && hcost!== undefined){
            query.min_price = {$lte : hcost, $gte : lcost}
        }

        const sortOptions = {};
        if(sort){
            sortOptions.min_price = sort
        }
        const restaurantName = await restSchema.find(query).sort(sortOptions).exec()

        if(restaurantName.length == 0){
            res.json({msg : "no city found"})
        }else{
            res.json(restaurantName)
        }

    }
    catch(err){
        res.status(500).json({msg : err})
    }
}