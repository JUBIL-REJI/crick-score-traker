const Prediction = require("../models/predictiondatamodel");

exports.predictionData = async(req,res)=>{
try {
  const {team,mostRunScorer,mostWicketTaker}=req.body;
   const prediction =new Prediction({team,mostRunScorer,mostWicketTaker});
   await prediction.save();
  res.json({
    message:'prediction added'
  })
  
} catch (error) {
  res.status(404).json("error gotted",error)
}

}

exports.getPredictionData = async(req,res)=>{
try {
  const predictionDatas =await Prediction.find();
  res.json({
    data:predictionDatas,
    message:"predection data gotted succesfully"
  })
} catch (error) {
  res.status(404).json("error",error)
}
}