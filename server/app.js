const express = require("express");
const routes = require("./routes/index");
const newRoute = require("./routes/news");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_DB_URL;
mongoose.connect(
  dbURL,
  function(err) {
    if (err) {
      console.log("error connecting to:" + dbURL);
    } else {
      console.log("Connected to: " + dbURL);
    }
  }
);
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/news", newRoute);

app.listen(PORT, function() {
  console.log(`Listen on port ${PORT}`);
});
