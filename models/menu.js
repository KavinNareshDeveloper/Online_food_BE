const mongoose = require("mongoose")

const menuSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    item:[
        {
            name:{type:String, require:true},
            price:{type:Number, require:true},
            desc:{type:String, require:true},
            qty:{type:Number, require:true}
        },
        {
            name:{type:String, require:true},
            price:{type:Number, require:true},
            desc:{type:String, require:true},
            qty:{type:Number, require:true}
        },
        {
            name:{type:String, require:true},
            price:{type:Number, require:true},
            desc:{type:String, require:true},
            qty:{type:Number, require:true}
        },
        {
            name:{type:String, require:true},
            price:{type:Number, require:true},
            desc:{type:String, require:true},
            qty:{type:Number, require:true}
        }
    ],
    amount:{type:Number, require:true}
}
)

module.exports=mongoose.model("menuItems",menuSchema)//mealtypes- collection name