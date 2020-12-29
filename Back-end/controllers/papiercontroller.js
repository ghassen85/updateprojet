const papierModel=require('../Models/papierModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mailer = require("nodemailer");
const { SchemaTypes, Schema, Mongoose } = require('mongoose');
var JWT_KEY = 'azerty'
const mongoose=require('mongoose');
const { body } = require('express-validator');


module.exports={
    Createpapier:function(req,res){
        papierModel.create({name:req.body.name,
            image:req.file.filename,
            chercheur:req.body.chercheur,
          date:req.body.date,
          domaine:req.body.domaine
        },function(err,papier){
                if(err){
                    res.json({msg:'erreur',status:500,data:null})
                }else{
                    res.json({msg:'papier ajouteé',status:200,data:papier})
                }
        })
    },
    Getpapier:function(req,res){
        papierModel.find({}).populate('chercheur').populate('domaine').exec(function(err,papier){
            if(err){
              console.log(err)
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'get all papier',status:200,data:papier})
            }
        })
    },
    GetOnepapier:function(req,res){
        papierModel.findById({_id:req.params.id},function(err,papier){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'get this papier',status:200,data:papier})
            }
    })
    },
    Updatepapier:function(req,res){
        papierModel.updateOne({_id:req.params.id}, {$set:req.body
        }, { new: true, runValidators: true, context: 'query' },function(err,papier){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'update this papier',status:200,data:papier})
            }
        })
    },
    deletepapier:function(req,res){
        papierModel.deleteOne({_id:req.params.id},function(err,papier){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'delte this papier',status:200,data:papier})
            }
        })
    },
    authentificate: function (req, res, next) {

     papierModel.findOne({
  
        name: req.body.name
  
      }, function (err, papierInfo) {
  
        if (err) {
          console.log('erreur')
          next(err)
  
        }
  
        else {
          console.log('aa')

  
          if (papierInfo != null) {
  
            console.log('papierInfo', papierInfo);
  
            if (req.body.domaine== papierInfo.domaine) {
  
              const token = jwt.sign({
  
                id: papierInfo._id
  
              }, req.app.get('secretKey'), { expiresIn: '1h' });
  
              res.json({
  
                status: "success",
  
                message: "papier found",
  
                data: {
  
                  papier: papierInfo,
  
                  accesstoken: token,
  
                }
  
              });
  
            }
  
            else {
  
              res.json({ status: "error" + err, message: "Invalid domaine", data: null })
  
            }
  
          }
  
          else {
  
            res.json({ status: "error", message: "Invalid name", data: null });
  
          }
  
        }
  
      });
  
  
  
    },
    GetOnechercheurpapier:function(req,res){ 

      console.log(mongoose.Types.ObjectId.isValid(req.params.id))
      if (mongoose.Types.ObjectId.isValid(req.params.id)){
        papierModel.find({chercheur:req.params.id},function(err,papier){
          if(err){
              res.json({msg:'erreur'+err,status:500,data:null})
          }else{
              res.json({msg:'get this papier',status:200,data:papier})
          }
  })
      }
      
    
  },
  GetOnedomainepapier:function(req,res){ 

    console.log(mongoose.Types.ObjectId.isValid(req.params.id))
    if (mongoose.Types.ObjectId.isValid(req.params.id)){
      papierModel.find({domaine:req.params.id},function(err,papier){
        if(err){
            res.json({msg:'erreur'+err,status:500,data:null})
        }else{
            res.json({msg:'get this papier',status:200,data:papier})
        }
})
    }
    
  
}





}