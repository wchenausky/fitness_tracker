const mongoose = require("mongoose");
//Creating Schema varible to build out Mongodb schema with Mongoose
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },

    excerises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter a type of excercise.",
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter a type of excercise.",
        },
        duration: {
          type: Number,
          required: "please eneter the duration in minutes.",
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//Write dynamically-created property to schema

const Workout = mongoose.model("Workout", workouSchema);

module.exports = Workout;
