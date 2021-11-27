const mongoose = require("mongoose");

const Todo = mongoose.Schema(
  {
    title: {
      type: String,
    },

    status: {
      type: String,
    },

    active: {
      type: Boolean,
    },

    endDate: {
      type: String,
    }, 
  },
  { timesamps: true }
);

const Reservation = mongoose.model("todo", Todo);

module.exports = { Todo };
