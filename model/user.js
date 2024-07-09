const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image: {
        public_id: {
          type: String,
          Required: true,
        },
        url: {
          type: String,
          Required: true,
        },
      },
    role:{
        type:String,
        default:'user'
    },
},{timestamps:true})
const UserModel = mongoose.model('user',Userschema)

module.exports = UserModel