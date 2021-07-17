const { Router } = require("express");

const {
  getWorkouts,
  updateWorkouts,
  createWorkouts,
  getAggregatedWorkouts,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getWorkouts);
router.put("/workouts/:id", updateWorkouts);
router.post("/workouts", createWorkouts);
router.get("/workouts/range", getAggregatedWorkouts);

module.exports = router;
