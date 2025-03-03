const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(cors()); //for cross origin refernce
app.use(express.json()); // it shouid be parssed to json format unless give error in our frontend
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.listen(PORT, function () {
  console.log(`the port is listenning at port ${PORT}`);
});
