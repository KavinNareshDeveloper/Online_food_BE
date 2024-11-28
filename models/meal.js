const mongoose = require("mongoose")

const mealSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    content:{
        type:String,
        require:true
    },

    image:{
        type:String,
        require:true
    },

    meal_type:{
        type:Number,
        require:true
    }
}
)

module.exports=mongoose.model("mealtypes",mealSchema)//mealtypes- collection name