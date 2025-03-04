const express = require("express");
const gameprofilecontroller = require("../controllers/gameprofileController")

const teamRouter= express.Router();

teamRouter.post("/",gameprofilecontroller.teamsProfile)

module.exports = teamRouter;