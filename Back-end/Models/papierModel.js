const mongoose=require('mongoose')

var Schema=mongoose.Schema

var papierSchema=Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    chercheur:{
        type:Schema.Types.ObjectId,
            ref:"chercheur"
    },
    date: {type : Date, default: Date.now},
    domaine:{
        type:Schema.Types.ObjectId,
        ref:"domaine"
    }

})
module.exports=mongoose.model('papier',papierSchema)