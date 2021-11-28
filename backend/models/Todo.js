const mongoose = require("mongoose");

const TodoShema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    status: {
      type:Boolean ,
    },

    active: {
      type:String ,
    },

    endDate: {
      type: String,
    }, 
  },
  { timesamps: true }
);

const Todo = mongoose.model("todo", TodoShema);

module.exports = { Todo };
