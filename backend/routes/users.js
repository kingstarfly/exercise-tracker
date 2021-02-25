const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get(async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  try {
    let saveResult = await newUser.save();
    console.log(saveResult);
    res.status(200).json("User added!");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
