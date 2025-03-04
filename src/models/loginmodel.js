const { default: mongoose } = require("mongoose");



const registerSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String,
  isRegistered:{
    type:Boolean,
    success:false
  }
});

const Register = mongoose.model("register",registerSchema)
module.exports = Register;