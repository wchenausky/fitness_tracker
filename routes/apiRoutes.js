const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workout", (req, res) => {
  Workout.find({})
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
    { $push: { exercise: body } },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// router.get("api/workout/:id", (req, res) => {
//   const { id } = req.params;
//   Workout.findById(id)
//     .then((data) => {
//       res.render("", {
//         exercise: exercise,
//         excersieName: exercise.name,
//         path: "/workout",
//       });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

router.get("api/workout", (req, res) => {
  workout
    .aggregate([
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
    
    router.get("/api/workout/range", (req, res) => {
      Workout.aggregate([{
          $addFields: {
              totalDuration: {
                  $sum: "$exercise.duration"
              }
          }
      }])
      .sort({ _id: -1 })
      .limit(7)
      .then(allWorkouts => {
          console.log(allWorkouts);
          res.send(allWorkouts);
      }).catch(err => {
          res.send(err);
      });
  })
})


module.exports = router;
