const chercheurcontrollers=require('../controllers/chercheurscontroller')
const route = require('express').Router()
const multer = require('../middleware/multer-config');
const jwt = require("jsonwebtoken")


route.post('/Addchercheur',multer.single('image'),chercheurcontrollers.Createchercheur)
route.post('/loginchercheur',chercheurcontrollers.authentificate)
route.post('/sendmail',chercheurcontrollers.sendMail)
route.post('/refreshtoken',chercheurcontrollers.refreshToken)
route.post('/logout',chercheurcontrollers.LogOut)


route.get('/getAllchercheur',validateUser,chercheurcontrollers.getAllchercheur)
route.get('/getOnechercheur/:id',chercheurcontrollers.getAllchercheurbyId)

route.put('/updateOnechercheur/:id',multer.single('image'),chercheurcontrollers.updateChercheur)

route.delete('/delteOnechercheur/:id',chercheurcontrollers.deletechercheur)


module.exports=route;

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'),
     function (err, decoded) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else { 
            req.body.userId = decoded.id;
            next();
        }
    });

}