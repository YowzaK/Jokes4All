const Joke = require("../models/joke");
const Type = require("../models/type");
const axios = require("axios");
require("dotenv/config");
const db = require("../config/db");

const postJoke = async (req, res) => {
  try {
    let {type, joke } = req.body; 
    let newJoke = new Joke(type, joke);
    newJoke = await newJoke.save();
    res.status(200).json({ success: true, data: newJoke });
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error.message });
    console.log(error);
  }
};

const getOneJoke = async (req, res) => {
  try{
    const [jokes,_] = await Joke.getRandom();
    res.status(200).json({data: jokes});
  }catch (error){
    res.status(404).json({ success: false, data: [], error: error.message });
  }
}

const getOneJokeFromType = async (req, res) => {
  try{
    const [jokes,_] = await Joke.getRandomFromType(req.params.id);
    res.status(200).json({data: jokes});
  }catch (error){
    res.status(404).json({ success: false, data: [], error: error.message });
  }
}

const getAllJokes = async (req, res) => {
  try {
    const [jokes, _] = await Joke.getAll();
    res.status(200).json({data: jokes});
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error.message });
  }
};

const getTypes = async (req, res) => {
  try {
    const [types, _] = await Type.getAll();
    res.status(200).json({data: types});
  }catch(error){
    res.status(404).json({ success: false, data: [], error: error.message });
  }

};

module.exports = {
  postJoke,
  getAllJokes,
  getTypes,
  getOneJoke,
  getOneJokeFromType
};
