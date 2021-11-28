const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/add", todoController.addTodo);
router.get("/getACS", todoController.getTodoACS);
router.get("/getDACS", todoController.getTodoDASC);
router.put("/update/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;
