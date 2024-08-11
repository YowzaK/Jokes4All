const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  passwordSecret: String
});

module.exports = mongoose.model("user", user);