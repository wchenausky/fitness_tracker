const mongoose = require("mongoose");
//Creating Schema varible to build out Mongodb schema with Mongoose
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a type of exercise.",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a type of exercise.",
      },
      duration: {
        type: Number,
        required: "please eneter the duration in minutes.",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
