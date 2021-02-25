const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get(async (req, res) => {
  try {
    let exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

router.route("/add").post(async (req, res) => {
  const { username, description, duration, date } = req.body;

  const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date),
  });

  try {
    let saveResult = await newExercise.save();
    console.log(saveResult);
    res.status(200).json("Exercise added!");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const ex = await Exercise.findById(req.params.id);
    res.status(200).json(ex);
  } catch (error) {
    res.status(400).json("Error " + error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const ex = await Exercise.findByIdAndDelete(req.params.id);
    console.log(ex);
    res.status(200).json(`Exercise ${req.params.id} deleted!`);
  } catch (error) {
    res.status(400).json("Error " + error);
  }
});

router.route("/update/:id").post(async (req, res) => {
  const { username, description, duration, date } = req.body;
  try {
    const ex = await Exercise.findById(req.params.id);
    ex.username = username;
    ex.description = description;
    ex.duration = Number(duration);
    ex.date = Date(date);

    try {
      let result = await ex.save();
      res.status(200).json(`Updated Exercise ${req.params.id} successfully.`);
    } catch (error) {
      res.status(400).json("Error " + error);
    }
  } catch (error) {
    res.status(400).json("Error " + error);
  }
});

module.exports = router;
