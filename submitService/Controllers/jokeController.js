const Joke = require("../models/jokeModel");
const axios = require("axios");
require("dotenv/config");

const postJoke = async (req, res) => {
  try {
    const newJoke = new Joke({
      type: req.body.type,
      joke: req.body.joke,
    });
    const savedJoke = await newJoke.save();
    res.status(201).json({ success: true, data: savedJoke });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error.message });
  }
};

const getJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(201).json({ success: true, data: jokes });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error.message });
  }
};

const getOneJoke = async (req, res) => {
  try {
    const jokes = await Joke.aggregate([{ $sample: { size: 1 } }]);
    res.status(201).send({ success: true, data: jokes });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error.message });
  }
};

const getTypes = async (req, res) => {
  const offlineTypes = ["computing", "animal", "Dad Jokes"];
  try {
    const types = await axios({
      method: "GET",
      url: `${process.env.DELIVERJOKE_SERVICE}/getTypes`,
    });

    res.status(201).json({ success: true, data: types.data.data });
  } catch (error) {    
    res.send(offlineTypes);
  }
};

const deleteJoke = async (req, res) => {
  try {
    await Joke.deleteOne({ _id: req.params.jokeId });
    res.status(200).json({ success: true, data: "Joke Deleted" });
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error.message });
  }
};

module.exports = {
  postJoke,
  getJokes,
  getTypes,
  deleteJoke,
  getOneJoke,
};
