const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location_id:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    country_name:{
        type:String,
        require:true

    }
})

module.exports=mongoose.model("locations",locationSchema)//Location - collection name