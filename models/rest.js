const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    location_id:{
        type:Number,
        require:true
    },
    city_id:{
        type:Number,
        require:true
    },
    locality:{
        type:String,
        require:true,
    },
    thumb:[
        {type:String, require:true},
        {type:String, require:true},
        {type:String, require:true},
        {type:String, require:true}
         ],
    aggregate_rating:{
        type:Number,
        require:true
    },
    rating_text:{
        type:String,
        require:true
    },
    min_price:{
        type:Number,
        require:true
    },
    contact_number:{
        type:Number,
        require:true
    },
    cuisine:[{
        id:{type:Number, require:true},
        name:{type:String, require:true},
        id:{type:Number, require:true},
        name:{type:String, require:true}
        }
    ],
    image:{
        type:String,
        require:true
    },
    mealtype_id:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("restaurants",restaurantSchema)//Restaurant - collection name