const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const userSchema = new mogoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema); // creating model for user which is takes two parameter 1.
//1st paramter collection in the database
//2nd paramer which is the schema created
module.exports = userModel;
