const { Workout } = require("../../models")

const getWorkouts = (req, res) => {
  
};

const updateWorkouts = (req, res) => {
  try{
    const { id } = req.prams;
    const exercise = req.body;

    const updateWorkout = Workout.findByIdAndUpdate(
      id, 
      { $push: {exercises: exercise}},
      {new: true}
    );
      return res.json(updateWorkout);
  } catch(error){
    console.log(error.message); 
  }
};

const createWorkouts = async(req, res) => {
  try {
    const workout = await Workout.create()
    return res.json(workout)

  } catch(error) {
    console.log(error.message)
    return res.status(500).json({ error: "failed to get workouts"})
  }
};

const getAggregatedWorkouts = (req, res) => {
  
};

module.exports = {
  getWorkouts,
  updateWorkouts,
  createWorkouts,
  getAggregatedWorkouts,
};
