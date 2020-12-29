const avisModel=require('../Models/avisModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mongoose = require('mongoose')

const mailer = require("nodemailer");
var JWT_KEY = 'azerty'

module.exports={
    Createavis:function(req,res){
        avisModel.create({
          description:req.body.description,
          expert:req.body.expert,
        papier:req.body.papier,
      date:req.body.date,
    //  domaine:req.body.domaine
    },function(err,avis){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }
            else{
                res.json({msg:'avis ajouteé',status:200,data:avis})

            }
            
        })
    },
    Getavis:function(req,res){
        avisModel.find({}).populate('expert').populate('papier').populate('domaine').exec(function(err,avis){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }
            else{
                res.json({msg:'get all avis',status:200,data:avis})

            }
        })
    },
    GetOneavis:function(req,res){
        avisModel.findById({_id:req.params.id},function(err,avis){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }
            else{
                res.json({msg:'get  avis',status:200,data:avis})

            }
        })
    },
    updateavis:function(req,res){
        avisModel.updateOne({_id:req.params.id}, {$set:req.body
        }, { new: true, runValidators: true, context: 'query' },function(err,avis){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }
            else{
                res.json({msg:'upadte avis',status:200,data:avis})

            }
        })
    },
    deleteavis:function(req,res){
        avisModel.deleteOne({_id:req.params.id},function(err,avis){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }
            else{
                res.json({msg:'delete avis',status:200,data:avis})

            }
        })
    },
    authentificate: function (req, res, next) {

        chercheurModel.findOne({
    
          email: req.body.email
    
        }, function (err, chercheurInfo) {
    
          if (err) {
            console.log('erreur')
            next(err)
    
          }
    
          else {
            console.log('aa')

    
            if (chercheurInfo != null) {
    
              console.log('chercheurInfo', chercheurInfo);
    
              if (bcrypt.compareSync(req.body.password, chercheurInfo.password)) {
    
                const token = jwt.sign({
    
                  id: chercheurInfo._id
    
                }, req.app.get('secretKey'), { expiresIn: '1h' });
    
                res.json({
    
                  status: "success",
    
                  message: "chercheur found",
    
                  data: {
    
                    chercheur: chercheurInfo,
    
                    accesstoken: token,
    
                  }
    
                });
    
              }
    
              else {
    
                res.json({ status: "error" + err, message: "Invalid password", data: null })
    
              }
    
            }
    
            else {
    
              res.json({ status: "error", message: "Invalid email", data: null });
    
            }
    
          }
    
        });
    
    
    
      } ,
      GetOnepapieravis:function(req,res){ 

        console.log(mongoose.Types.ObjectId.isValid(req.params.id))
        if (mongoose.Types.ObjectId.isValid(req.params.id)){
          avisModel.find({papier:req.params.id}).populate('expert').populate('papier').exec(function(err,papier){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'get this papier',status:200,data:papier})
            }
    })
        }
        
      
    } 
      
    
  

}