const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const userSchema = new mogoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);
