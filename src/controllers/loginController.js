const Register = require("../models/loginmodel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "details not add" });
    }

    const isExist = await Register.findOne({ email: email });
    if (isExist) {
      return res.status(401).json({ message: "user already exist" });
    }
   
    const hashPassword =await bcrypt.hash(password, 10);
    const registeredUser = new Register({
      username,
      email,
      password: hashPassword,
    });
    await registeredUser.save();
    
    res
      .status(200)
      .json({success:true, message: "user registered succesfully", user: registeredUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


exports.login= async (req,res)=>{
try {
  const {email,password} = req.body;
  const user =await Register.findOne({email});
  if(!user){
    return res.status(401).json({message:'user not found'})
  }
  const isMatching =await bcrypt.compare(password,user.password)
  if(!isMatching){
    return res.status(401).json({message:"incorrect password"})
  }else{

    const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie('token',token)
    res.status(200).json({logined:true,message:"login succesfull"})
  }


} catch (error) {
  res.status(500).json({message:"server error occured",error:error.message ||error})
}
}