const chercheurModel = require('../Models/chercheursModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const mailer = require("nodemailer");
var JWT_KEY = 'azerty'
const randtoken = require('rand-token')
var refreshTokens= {}

module.exports={
    Createchercheur: function(req,res){
        chercheurModel.create({name:req.body.name,
          email:req.body.email,
          password:req.body.password,
          domaine:req.body.domaine,
          image:req.file.filename},function(err,chercheur){
            if(err){
                res.json({msg:"erreur"+err,satuts:500,data:null})
            }else{
                res.json({msg:"cheurcheur ajouter",satuts:200,data:chercheur})
            }
        })
    },
    getAllchercheur:function(req,res){
        chercheurModel.find({}).populate('domaine').exec(function(err,chercheur){
            if(err){
                res.json({msg:"erreur"+err,satuts:500,data:null})
            }else{
                res.json({msg:'get ALL chercheurs',satuts:200,data:chercheur})
            }
        })
    },
    getAllchercheurbyId:function(req,res){
        chercheurModel.findById({_id: req.params.id },function(err,chercheur){
            if(err){
                res.json({msg:"erreur"+err,satuts:500,data:null})
            }else{
                res.json({msg:'get one chercheurs',satuts:200,data:chercheur})

            }

        })
    },
    updateChercheur: function (req, res) {
        chercheurModel.updateOne({ _id: req.params.id }, {$set:req.body
        }, { new: true, runValidators: true, context: 'query' }, function (err, chercheur) {
          if (err) {
            res.status(500).json({ msg: "errure" + err, status: 500, data: null }
            )
          }
          else {
            res.status(200).json({ msg: "update ALl users", status: 200, data: chercheur })
    
          }
    
    
        })
      },
      deletechercheur:function(req,res){
          chercheurModel.findByIdAndDelete({_id: req.params.id},function(err,chercheur){
              if(err){
                res.status(500).json({ msg: "errure" + err, status: 500, data: null })
              } else {
                res.status(200).json({ msg: "delete  user", status: 200, data: chercheur })
        
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
          res.json({ msg: "emai", data: result })
    
    
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
            console.log('chercheurInfo',chercheurInfo)

            if (chercheurInfo != null) {
    
              console.log('chercheurInfo', chercheurInfo);
    
              if ( bcrypt.compareSync(req.body.password, chercheurInfo.password)) {
                var refreshToken = randtoken.uid(256)
                    refreshTokens[refreshToken] = chercheurInfo._id
    
                const token = jwt.sign({
    
                  id: chercheurInfo._id
    
                }, req.app.get('secretKey'), { expiresIn: '1h' });
    
                res.json({
    
                  status: "success",
    
                  message: "chercheur found",
    
                  data: {
    
                    chercheur: chercheurInfo,
    
                    accesstoken: token,
                    refreshToken: refreshToken
    
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
      refreshToken: function (req, res) {
  var id = req.body._id
  var refreshToken = req.body.refreshToken
  console.log('id',id)
  console.log('refreshTokens',(refreshTokens[refreshToken] == id))
  console.log('refresh',(refreshToken in refreshTokens)) 
  if ((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == id)) {

      var user = {
          'id': id

      }
      var token = jwt.sign(user, req.app.get('secretKey'), {expiresIn: 3600})
      res.json({accesstoken: token})
  } else {
      res.sendStatus(401) 
  }
},
LogOut: function (req, res) {
  var refreshToken = req.body.refreshToken
//var refreshTokens = {}
  console.log('refreshToken',refreshToken)

  jwt.verify(req.headers['x-access-token'],req.app.get('secretKey'))

  if (refreshToken in refreshTokens) {
      delete refreshTokens[refreshToken]
  }
  res.json({msg: 'token experied', status: 204})


}







}