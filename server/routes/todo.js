const express = require("express");
const todoController = require("../controllers/todoController");
const db = require("../db/connect.js");

const router = express.Router();
// Client access: NOTE - if you want to interact with the database,
// you first need to get a reference to the collection (think of a table in SQL).
// To do this, you have to await the return of calling client.db().collection('todos') and then you can do what you need off the
// collection - see the example below in the POST request handler.

// Create a route so that when a POST request is made, it stores the request body in the database under a collection called "todo".
router.post("/", todoController.todo_post);

// Create a route that will return all of the items within a collection.
router.get("/todo", async (req, res, next) => {
  // TODO: IMPLEMENT THE REAL ROUTE HANDLER
  console.log(db);
  res.send("Hello!");
});

module.exports = router;
