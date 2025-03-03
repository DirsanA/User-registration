const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

const userModel = require("./models/user");
const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Create user API
app.post("/createUser", function (req, res) {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log("Unable to register user", err);
      return res
        .status(500)
        .json({ message: "Unable to register user", error: err });
    });
});

// Fetch all users
app.get("/", function (req, res) {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => {
      console.log("Unable to fetch user data:", err);
      return res
        .status(500)
        .json({ message: "Error fetching users", error: err });
    });
});

// Fetch a single user by ID
app.get("/getUser/:id", function (req, res) {
  const id = req.params.id;
  userModel
    .findById(id)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log("Error fetching user:", err);
      return res.status(500).json({ message: "User not found", error: err });
    });
});

// Update user
app.put("/updateUser/:id", function (req, res) {
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => res.json(user))
    .catch((err) => {
      console.log("Error updating user:", err);
      return res
        .status(500)
        .json({ message: "Error updating user", error: err });
    });
});

app.delete("/deleteUser/:id", function (req, res) {
  const { id } = req.params;
  userModel
    .findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch((err) => {
      console.log("Error deleting user:", err);
      return res
        .status(500)
        .json({ message: "Error deleting user", error: err });
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
