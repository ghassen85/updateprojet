const aviscontroller=require('../controllers/aviscontroller')
var route=require('express').Router()

route.post('/Addavis',aviscontroller.Createavis)
route.post('/login2',aviscontroller.authentificate)
 
route.get('/getAllavis',aviscontroller.Getavis)
route.get('/getOneavis/:id',aviscontroller.GetOneavis)
route.get('/getOneavispapier/:id',aviscontroller.GetOnepapieravis)


route.put('/updateavis/:id',aviscontroller.updateavis)

route.delete('/deleteavis/:id',aviscontroller.deleteavis)


module.exports=route