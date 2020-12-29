const mongoose = require('mongoose')
var Schema = mongoose.Schema
var avisSchema=Schema({
    
    description:{
        type:String,
        required:true
    },
    expert:
    
        {
            type:Schema.Types.ObjectId,
            ref:"expert"
        }
    ,
    papier:{
        type:Schema.Types.ObjectId,
            ref:"papier"
    },
    date: {type : Date, default: Date.now},
   /*  domaine:{
        type:Schema.Types.ObjectId,
        ref:"domaine" 
    } */
 

})
module.exports=mongoose.model('avis',avisSchema)