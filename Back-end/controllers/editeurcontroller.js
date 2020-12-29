const editeurModel=require('../Models/EditeurModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mailer = require("nodemailer");
var JWT_KEY = 'azerty'

module.exports={
    CreateEditeur:function(req,res){
       
        console.log("data : ",req.body)
        editeurModel.create(req.body,function(err,editeur){

            if(err){
                console.log(err);

                res.json({msg:"erreur"+err,status:500,data:null})
            }else{
                console.log('bon');
                res.json({msg:"editeur ajouteé",status:200,data:editeur})
            }
        })
                                  },
    GetEditeur:function(req,res){
        editeurModel.find({},function(err,editeur){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'get All editeur',status:200,data:editeur})
            }
        }
        )                       },
    GetOneEditeur:function(req,res){
        editeurModel.findById({_id: req.params.id},function(err,editeur){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'get One editeur'+err,status:500,data:editeur})
            }
        })
                                   },
    UpdateEditeur:function(req,res){
        editeurModel.updateOne({_id:req.params.id},{$set:req.body
        }, { new: true, runValidators: true, context: 'query' },function(err,editeur){
            if(err){
                res.json({msg:'erreur',status:500,data:null})
            }else{
                res.json({msg:'update Editeur',status:200,data:editeur})
            }
        })
                                },
    deleteEditeur:function(req,res){
        editeurModel.deleteOne({_id:req.params.id},function(err,editeur){
            if(err){
                res.json({msg:'erreur'+err,status:500,data:null})
            }else{
                res.json({msg:'delete editeur',status:200,data:editeur})
            }
        })
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
                                res.json({ msg: "email", data: result })
                                
                                
                                })
                                
                                },
                                authentificate: function (req, res, next) {

                                    editeurModel.findOne({
                                
                                      email: req.body.email
                                
                                    }, function (err, editeurInfo) {
                                        console.log('dd')

                                      if (err) {
                                        console.log('erreur')
                                        next(err)
                                
                                      }
                                
                                      else {
                            
                                
                                        if (editeurInfo != null) {
                                
                                          console.log('editeurInfo', editeurInfo);
                                
                                          if ( bcrypt.compareSync(req.body.password,editeurInfo.password)) {
                                
                                            const token = jwt.sign({
                                
                                              id: editeurInfo._id
                                
                                            }, req.app.get('secretKey'), { expiresIn: '1h' });
                                
                                            res.json({
                                
                                              status: "success",
                                
                                              message: "editeur found",
                                
                                              data: {
                                
                                                editeur: editeurInfo,
                                
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
                                
                                
                                
                                  }
    
    
}