var editeurcontrollers=require('../controllers/editeurcontroller')
const route=require('express').Router()
const multer = require('../middleware/multer-config');


route.post('/Addediteur',editeurcontrollers.CreateEditeur)
route.post('/login',editeurcontrollers.authentificate)

route.post('/envoimail',editeurcontrollers.sendMail)

route.get('/getediteur',editeurcontrollers.GetEditeur)
route.get('/getOne/:id',editeurcontrollers.GetOneEditeur)

route.put('/updateediteur/:id',editeurcontrollers.UpdateEditeur)

route.delete('/deleteediteur/:id',editeurcontrollers.deleteEditeur)

module.exports=route