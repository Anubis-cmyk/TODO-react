const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/add", todoController.addTodo);
router.get("/get", todoController.getTodo);
router.put("/update/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;
