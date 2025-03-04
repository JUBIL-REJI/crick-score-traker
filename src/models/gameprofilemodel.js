const { default: mongoose } = require("mongoose");

const profileSchema = new mongoose.Schema({
  
  team: String,
  profile_Image: String,
  isDone:{
    type:Boolean,
    success:false
  }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
