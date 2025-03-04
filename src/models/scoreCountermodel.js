const { default: mongoose } = require("mongoose");


const scoreCouterSchema = new mongoose.Schema({
total_team_score:Number,
top_run_scored:Number,
top_wicket_taken:Number,
player_ofthe_tournament:Number
});

const ScoreCouter = mongoose.model("scorecounter",scoreCouterSchema);
module.exports=ScoreCouter;