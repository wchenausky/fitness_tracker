const Workout = require("../models/workout")
const router = require("express").Router();
const Workout = require("../models/workout")

module.exports = app => {

    app.get("/api/workout", (req, res) => {
        Workout.find({}).then(workout => {
            res.send(workout);
        })
        .catch(err => {
            res.send(err);
        });
    })

    app.post("/api/workout", ({ body}, res) => {
        Workout.create(body)
        .then(data => { 
                res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
    });

    app.put("/api/workout/:id", (req, res) => {
        const { id } = req.params.id;
        Workout.findByIdAndUpdate(id, { $push: {excerises: req.body} })
        .then(data => {
            res.send(data)
        });
    });


}