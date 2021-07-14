const router = require("express").Router();

const path = require("path");
const { renderWorkouts, renderStats } = require("../../controllers/api/index");

router.get("/exercise", renderWorkouts);

router.get("/stats", renderStats);

module.exports = router;
