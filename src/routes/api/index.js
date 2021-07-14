const { Router } = require("express");


const {
  getWorkouts,
  updateWorkouts,
  createWorkouts,
  getAggregatedWorkouts,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getWorkouts);
router.post("/workouts", updateWorkouts);
router.put("/workouts/:id", createWorkouts);
router.get("/workouts/range"), getAggregatedWorkouts;

module.exports = router;


