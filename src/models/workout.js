const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = {
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: "enums",
      name: "string",
      duration: "numbers",
      weight: "numbers",
      reps: "numbers",
      sets: "numbers",
    },
  ],
};
const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
