let db = require("../models/workout");
const router = require("express").Router();
const Workout = require("../models/workout");

module.exports = (app) => {
  app.get("/api/workout", (req, res) => {
    Workout.find({})
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.put("/api/workout/:id", (req, res) => {
    const { id } = req.params.id;
    Workout.findByIdAndUpdate(id, { $push: { exercise: req.body } }).then(
      (data) => {
        res.send(data);
      }
    );
  });

  app.get("api/workout/:id", (req, res) => {
    const { id } = req.params;
    Workout.findById(id)
      .then((data) => {
        res.render("", {
          exercise: exercise,
          excersieName: exercise.name,
          path: "/workout",
        });
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.get("api/workout", (req, res) => {
    db.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$excercise.duration",
          },
        },
      },
    ])
      .then((allWorkouts) => {
        console.log(allWorkouts);
        res.send(allWorkouts);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
