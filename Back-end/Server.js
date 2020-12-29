const express=require('express')
const db =require('./config/database')
var bodyParser=require('body-parser')
const swaggerUi=require('swagger-ui-express')
const swaggerDocument=require('./config/swagger.json')
const cors=require('cors')



const chercheurRoute=require('./Routers/chercheursRouter')
const editeurRoute=require('./Routers/editeurRouter')
const expertRoute=require('./Routers/expertRouter')
const papierRoute=require('./Routers/papierRouter')
const avisRoute=require('./Routers/avisRouter')
const domaineRoute=require('./Routers/domaineRouter')

var app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/chercheurs',chercheurRoute);
app.use('/editeurs',editeurRoute);
app.use('/experts',expertRoute);
app.use('/papiers',papierRoute);
app.use('/aviss',avisRoute);
app.use('/domaines',domaineRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('secretKey','azerty')
app.get('/getfile/:image',function(req,res){
    console.log('test');
    res.sendFile(__dirname +'/images/'+ req.params.image)
})

app.use(function(req,res,next){
    let err=new Error();
    err.status=404;
    next(err);

});
app.use(function(err,req,res,next){
    console.log(err);
        if(err.status===404)
        res.status(404).json({message:"Path Not found"});
        else
        res.status(500).json({message:"Something looks wrong !!"+err})
});

app.listen(4000,function(){
    console.log('running app on port 4000')})