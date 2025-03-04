const Profile = require("../models/gameprofilemodel");

exports.teamsProfile=async(req,res)=>{
try {
  const{team,profile_Image} = req.body;
  if(!team){
    res.status(401).json({message:"these two required"})
  }
  const teamProfile = new Profile({team,profile_Image});
  await teamProfile.save();
  res.status(200).json({success:true,message:"team profile set successfully"})
} catch (error) {
  res.status(500).json({message:"server error",error:error.message||error})
}
}