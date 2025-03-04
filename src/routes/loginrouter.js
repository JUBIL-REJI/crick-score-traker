const express = require("express");
const logincontroller = require('../controllers/loginController')

const loginRouter= express.Router();

loginRouter.post("/", logincontroller.register);
loginRouter.post("/login",logincontroller.login);


module.exports = loginRouter;