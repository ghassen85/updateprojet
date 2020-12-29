const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images');
  },
  filename: (req, file, callback) => {
    console.log('file',file.originalname);
    const name = file.originalname;
    callback(null, name );
  }
});
const fileFilter = (req,file,callback)=>{
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype  == 'application/pdf'  ){
    console.log('typeOfTheImae',file.mimetype)
        callback(null,true)
    }else{
        callback(null,false,file.mimetype)
    }
}
const upload =multer({storage: storage,fileFilter:fileFilter})
module.exports = upload;
 
