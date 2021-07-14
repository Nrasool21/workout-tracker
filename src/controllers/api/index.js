const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  try {
    const lastWorkout = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    return res.json(lastWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: " Failed to get workouts " });
  }
};

const updateWorkouts = (req, res) => {
  try {
    const { id } = req.prams;
    const exercise = req.body;

    const updateWorkout = Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: exercise } },
      { new: true }
    );
    return res.json(updateWorkout);
  } catch (error) {
    console.log(error.message);
  }
};

const createWorkouts = async (req, res) => {
  try {
    const workout = await Workout.create();
    return res.json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "failed to get workouts" });
  }
};

const getAggregatedWorkouts = async (req, res) => {
  try {
    const lastWorkout = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
      .sort({ _id: -1 })
      .limit(7);
    return res.json(lastWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: " Failed to get workouts " });
  }
};

module.exports = {
  getWorkouts,
  updateWorkouts,
  createWorkouts,
  getAggregatedWorkouts,
};
