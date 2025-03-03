const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware setup
app.use(cors()); // For cross-origin resource sharing
app.use(express.json()); // Parse incoming JSON requests

const userModel = require("./models/user");
const PORT = 5000;

// Mongoose connection with error handling
mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Create user API
app.post("/createUser", function (req, res) {
  userModel
    .create(req.body)
    .then(function (user) {
      return res.json(user); // Respond with the created user
    })
    .catch(function (err) {
      console.log("Unable to register user", err);
      return res
        .status(500)
        .json({ message: "Unable to register user", error: err }); // Send error response
    });
});

app.listen(PORT, function () {
  console.log(`Server is listening at port ${PORT}`);
});
