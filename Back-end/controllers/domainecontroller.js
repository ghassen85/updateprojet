const domaineModel=require('../Models/domaineModel')
module.exports={
  AjouterDomaine:function(req,res){
      domaineModel.create(req.body,function(err,domaine){
          if(err){
              res.json({msg:'erreur'+err,status:500,data:null})
          }
          else{
              res.json({msg:'domaine ajouter',status:200,data:domaine})
          }
      })
  },getAlldomaine:function(req,res){
      domaineModel.find({},function(err,domaine){
          if(err){
              res.json({msg:'erreur'+err,status:500,data:null})
          }else{
              res.json({msg:'get all domaine',status:200,data:domaine})
          }
      })
  }
  ,
  DeleteDomaine:function(req,res){
      domaineModel.findByIdAndDelete({_id: req.params.id },function(err,domaine){
          if(err){
              res.json({msg:'erreur'+err,status:500,data:null})
          }else{
              res.json({msg:'domaine delete',status:200,data:domaine})
          }
      })
  }  
}