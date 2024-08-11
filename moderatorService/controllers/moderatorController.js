require("dotenv/config");
const axios = require("axios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const https = require('https');
const agent = new https.Agent({rejectUnauthorized: false});

const deleteJoke = async (req, res) => {
  try {
    const response = await axios({
      httpsAgent: agent,
      method: "delete",
      url: `${process.env.SUBMITSERVICE}/deleteJoke/${req.params.id}`,
    });
    res.status(201).json({ success: true, data: "Joke Deleted" });
  } catch (error) {
    res.status(409).json({ success: false, error: error.message });
  }
};

const getJoke = async (req, res) => {
  try {
    const response = await axios({
      httpsAgent: agent,
      method: "get",
      url: `${process.env.SUBMITSERVICE}/getOneJoke`
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

const addModeratedJoke = async (req, res) => {
  const {type, joke} = req.body;
  try {
    const response = await axios({
      httpsAgent: agent,
      method: "post",
      url: `${process.env.DELIVERJOKE}/add`,
      data: {
        type: type,
        joke: joke,
      },
    });
    const deleteJoke = await axios({
      httpsAgent: agent,
      method: "delete",
      url: `${process.env.SUBMITSERVICE}/deleteJoke/${req.body._id}`,
    });
    res.status(200).json({success: true});
  } catch (error) {
    res.status(404).send(error.message);
    console.log(error);
  }
};

const authenticateLogin = async (req, res) => {
  const user = await User.find();  
  const hashedPassword = await bcrypt.hash(user[0].password, 10);
  if (req.body.username == user[0].username) {
    if (await bcrypt.compare(req.body.password, hashedPassword)) {
      const moderator = {
        username: user[0].username,
        password: hashedPassword,
      };
      const accessToken = jwt.sign(moderator, process.env.ACCESS_SECRET,{ expiresIn: '24h' });
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(400).send("password is wrong");
    }
  } else {
    res.status(400).send("username is wrong");
  }
};

function authenticateToken(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (token == null) {
    res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.ACCESS_SECRET, (err, moderator) => {
      if (err) return res.sendStatus(403);
      req.moderator = moderator;
      next();
    });
  }
}

module.exports = {
  deleteJoke,
  getJoke,
  addModeratedJoke,
  authenticateLogin,
  authenticateToken,
};
