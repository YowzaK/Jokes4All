const mongoose = require("mongoose");

const Joke = new mongoose.Schema({
  type: {
    type: Number,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Joke", Joke);
