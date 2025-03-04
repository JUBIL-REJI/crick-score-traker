const express = require("express");
const predictionDatacontroller = require("../controllers/predictionDatacontroller");

const router = express.Router();

router.post("/", predictionDatacontroller.predictionData);
router.get("/",predictionDatacontroller.getPredictionData);

module.exports = router;
