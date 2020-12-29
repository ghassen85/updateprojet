const expertcontroller=require('../controllers/expertcontroller')
 var route=require('express').Router()

 route.post('/Addexpert',expertcontroller.Createexpert)
 route.post('/login2',expertcontroller.authentificate)
 route.post('/sendmail',expertcontroller.sendMail)

 route.get('/getexpert',expertcontroller.GetAllExpert)
 route.get('/getOneexpert/:id',expertcontroller.GetOneExpert)

 route.put('/updateexpert/:id',expertcontroller.Updateexpert)
 
 route.delete('/delteexpert/:id',expertcontroller.deleteexpert)

 module.exports=route