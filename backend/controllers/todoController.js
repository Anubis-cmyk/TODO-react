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
 * retrieve todo details ASC
 * @param {*} req 
 * @param {*} res 
 */
const getTodoACS = async (req, res) => {
   try {  
    const todos = await Todo.find().sort( { endDate: 1 } ); 
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
 * retrieve todo details DASC
 * @param {*} req 
 * @param {*} res 
 */
const getTodoDASC = async (req, res) => {
   try {  
    const todos = await Todo.find().sort( { endDate: -1 } ); 
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
  try {
    let todo = await Todo.findById(req.params.id); 
    const data = {
      title: req.body.title || todo.title,
      status: req.body.status || todo.status,
      active: req.body.active || todo.active,
      endDate: req.body.endDate || todo.endDate, 
    };
    todo = await Todo.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(todo);
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
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
exports.getTodoACS = getTodoACS;
exports.getTodoDASC = getTodoDASC;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
