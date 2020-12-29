const expertModel=require('../Models/expertsModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mailer = require("nodemailer");
const { Schema } = require('mongoose');
var JWT_KEY = 'azerty'
const mongoose=require('mongoose')


module.exports={
    Createexpert:function(req,res){
        expertModel.create({name:req.body.name,
          email:req.body.email,
          password:req.body.password,
          domaine:req.body.domaine},function(err,expert){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else {
                res.json({msg:'expert Ajouteé',status:200,data:expert})
            }
        })
    },
    GetAllExpert:function(req,res){
        expertModel.find({}).populate('domaine').exec(function(err,expert){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'Get All experts',status:500,data:expert})
            }
        })
    },
    GetOneExpert:function(req,res){
      console.log(mongoose.Types.ObjectId.isValid(req.params.id))
      if (mongoose.Types.ObjectId.isValid(req.params.id)){
        expertModel.find({domaine:req.params.id},function(err,expert){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'get this expert',status:200,data:expert})
            }
        })}
    },
    Updateexpert:function(req,res){
        expertModel.updateOne({_id:req.params.id},function(err,expert){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'update this expert',status:200,data:expert})
            }
        })
    },
    deleteexpert:function(req,res){
        expertModel.deleteOne({_id:req.params.id},function(err,expert){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'delete this expert',status:200,data:expert})
            }
        })
    },
    authentificate: function (req, res, next) {

        expertModel.findOne({
    
          email: req.body.email
    
        }, function (err, expertInfo) {
    
          if (err) {
            console.log('erreur')
            next(err)
    
          }
    
          else {
            console.log('aa')

    
            if (expertInfo != null) {
    
              console.log('expertInfo', expertInfo);
    
              if (bcrypt.compareSync(req.body.password, expertInfo.password)) {
    
                const token = jwt.sign({
    
                  id: expertInfo._id
    
                }, req.app.get('secretKey'), { expiresIn: '1h' });
    
                res.json({
    
                  status: "success",
    
                  message: "expert found",
    
                  data: {
    
                    expert: expertInfo,
    
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
    
    
    
      },
      sendMail: function (req, res) {
        let body = {
    
          to: req.body.to,
    
          from: req.body.from,
    
          subject: req.body.subject,
    
          text: req.body.text,
    
        }
    
        const transporter = mailer.createTransport({
    
          host: 'smtp.mailtrap.io',
    
          port: 2525,
          ssl: false,
          tls: true,
    
          send: true,
    
          auth: {
    
            user: "b0c3d1e24af4f9",
    
            pass: "2bf1755c784f53"
    
          }
    
        })
    
    
    
        transporter.verify(function (error, success) {
    
          if (error) {
    
            console.log(error);
    
          } else {
    
            console.log("Server is ready to take our messages");
    
          }
    
        });
    
    
    
        transporter.sendMail(body, (err, result) => {
    
          if (err) {
    
            console.log(err);
    
            return false
    
          }
    
          console.log(result);
    
          console.log("email sent");
          res.json({ msg: "emai", data: result })
    
    
        })
    
      }



}