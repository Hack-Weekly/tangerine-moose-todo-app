const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// Create a route so that when a POST request is made, it stores the request body in the database under a collection called "todo".
router.post("/todo", todoController.todo_post);

// Create a route that will return all of the items within a collection.
router.get("/todo", todoController.todo_get);

// Create a route to mark item as complete (we could also use this if we wanted to mark the item as not complete)
router.put("/todo/:id", todoController.todo_complete);

// Delete todo item
router.delete("/todo/:id", todoController.todo_delete);

module.exports = router;
