const domainecontroller=require('../controllers/domainecontroller')
const route=require('express').Router()

route.post('/AddDomaine',domainecontroller.AjouterDomaine)
route.get('/getAll',domainecontroller.getAlldomaine)
route.delete('/deleteDomaine/:id',domainecontroller.DeleteDomaine)
module.exports=route;