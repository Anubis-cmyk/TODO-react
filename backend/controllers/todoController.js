const { Todo } = require("../models/Todo");


/**
 * add todo details
 * @param {*} req 
 * @param {*} res 
 */
 const addTodo = async (req, res) => {
    try { 
      
      console.log(req.body);
      const { active, status, endDate, title} = req.body;
      let todoItem = new Todo({ 
        active,
        status,
        endDate, 
        title
      });
      await todoItem.save();
      res.send("Todo details uploaded successfully.");
    } catch (error) {
      res
        .status(400)
        .send("Error, Try again later. :" + error);
    }
  }
   

/**
 * retrieve todo details
 * @param {*} req 
 * @param {*} res 
 */
const getTodo = async (req, res) => {
   try {  
    const todos = await Todo.find(); 
    if (todos){
      return res.status(200).json({ message: "Data retrieving",data:todos });
    } 
    else {
      console.log(todos);
      return res.status(400).json({ message: "error while retrieving data" });
    }  
  } catch (e) {
    res.status(500).json({ message: "Server error : " + e });
  }
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

  const todo = await Todo.findById(TodoId);
  if (!todo) {
    console.log("Error deleting");
  }
  await todo.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
