var mongoose=require('mongoose')
const Schema =mongoose.Schema
var domaineSchema=Schema({
    name:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('domaine',domaineSchema)