const { Router } = require("express");

const {
  getWorkouts,
  updateWorkouts,
  createWorkouts,
  getAggregatedWorkouts,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getWorkouts);
router.post("/workouts", createWorkouts);
router.put("/workouts/:id", updateWorkouts);
router.get("/workouts/range", getAggregatedWorkouts);

module.exports = router;
