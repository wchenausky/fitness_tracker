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
        weight: {
          type: Number
      },
      reps: {
          type: Number
      },
      sets: {
          type: Number
      },
      distance: {
          type: Number
      }
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

workoutSchema.virtual('durationTotal')
.get(()=>{
  //reduce excercise durations to total of one duration for a day
return this.exercises.reduce((total,excercise) => {
  return total + excercise.duration
}, 0)
} )
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
