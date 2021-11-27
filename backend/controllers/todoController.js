const { Todo } = require("../models/Todo");


/**
 * add todo details
 * @param {*} req 
 * @param {*} res 
 */
const addTodo = async (req, res) => {
  const todo = new Todo(req.body);

  await todo.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};


/**
 * retrieve todo details
 * @param {*} req 
 * @param {*} res 
 */
const getTodo = async (req, res) => {
  await Todo.find().exec(function (err, Todos) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(Todos);
    }
  });
};


/**
 * update todo details
 * @param {*} req 
 * @param {*} res 
 */
const updateTodo = async (req, res) => {
  const { title, status, active, endDate } = req.body;

  const TodoId = req.params.id;
  let Todo;
  try {
    Todo = await Todo.findById(TodoId);
  } catch (err) {
    console.log("Error updating");
  }

  Todo.title = title;
  Todo.status = status;
  Todo.email = email;
  Todo.active = active;
  Todo.endDate = endDate;

  await Todo.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};


/**
 * delete todo details
 * @param {*} req 
 * @param {*} res 
 */
const deleteTodo = async (req, res) => {
  const TodoId = req.params.id;

  const Todo = await Todo.findById(TodoId);
  if (!Todo) {
    console.log("Error deleting");
  }
  await Todo.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
