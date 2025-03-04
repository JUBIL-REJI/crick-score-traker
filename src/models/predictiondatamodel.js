const { default: mongoose } = require("mongoose");


const predictiondataSchema =new mongoose.Schema({
team:String,
mostRunScorer:String,
mostWicketTaker:String,
})

const Prediction = mongoose.model("prediction",predictiondataSchema);

module.exports=Prediction;
