const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = { Todo };
