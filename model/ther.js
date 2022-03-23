const mongoose = require("mongoose");


const theroSchema=new mongoose.Schema({
    data:{
        type:String
    }


},{timestamps:true,versionKey: false })

module.exports =mongoose.model("thero",theroSchema);