const express = require("express");
const app = express();
const helmet = require("helmet");
const cookie = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//const db = require("./models");

//route
const belanjaRouter = require("./routers/belanja.router");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(helmet());
app.use(cors());

// ROUTES MIDDLEWARE
app.use("/api", belanjaRouter);

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });
app.listen(8003, () => {
  console.log("running");
});
