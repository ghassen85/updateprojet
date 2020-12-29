const papiercontroller=require('../controllers/papiercontroller')
var router=require('express').Router()
const multer = require('../middleware/multer-config');

router.post('/Addpapier',multer.single('image'),papiercontroller.Createpapier)
router.post('/login2',papiercontroller.authentificate)


router.get('/getAllpapier',papiercontroller.Getpapier)
router.get('/getOnepapier/:id',papiercontroller.GetOnepapier)
router.get('/getOnechecheur/:id',papiercontroller.GetOnechercheurpapier)
router.get('/getOnedomaine/:id',papiercontroller.GetOnedomainepapier)

router.put('/updatepapier/:id',multer.single('image'),papiercontroller.Updatepapier)

router.delete('/deletepapier/:id',papiercontroller.deletepapier)
 




module.exports=router