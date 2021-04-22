const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workout", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workout) => {
      res.send(workout);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/api/workout", (req, res) => {
  Workout.create({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/api/workout/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/api/workout/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((allWorkouts) => {
      console.log(allWorkouts);
      res.send(allWorkouts);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
