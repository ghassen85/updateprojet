var mongoose=require('mongoose')
const validator = require('validator');//validation (condtion pour any attribut)
var uniqueValidator = require('mongoose-unique-validator');//unique mail
bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const Schema=mongoose.Schema
var chercheurSchema = Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: {
            validator: function (v) {
                return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v));

            },
            message: propos => `${propos.value
                }is not a valide format`
                },   unique: true
    },
   image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: function password(number) {

                var phoneno = /^[A-Za-z]\w{2,14}$/;

                if (phoneno.test(number)) {

                    return true

                }



                else {

                    console.log("invalid password");

                    return false

                }

            }
        }
    },
    domaine:{
        type:Schema.Types.ObjectId,
        ref:"domaine"
    }
    
})


chercheurSchema.plugin(uniqueValidator);//unique email
chercheurSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    next();
})//cryptage mot de passe

module.exports=mongoose.model('chercheur',chercheurSchema)