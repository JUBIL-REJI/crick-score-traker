const express = require("express");
require("dotenv").config();
const cookieparser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3000;
const { connectDb } = require("./src/config/db");
const router = require("./src/routes/preditionrouter");
const loginrouter = require("./src/routes/loginrouter");
const teamRouter = require("./src/routes/teamprofilerouter");
app.use(express.json());
app.use(cookieparser());
connectDb();

app.use("/prediction", router);
app.use("/prediction/data", router);
app.use("/register", loginrouter);
app.use("/login", loginrouter);
app.use("/team",teamRouter);

app.listen(port, () => {
  console.log(`backend is connected to ${port}`);
});
