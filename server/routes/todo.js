const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// Create a route so that when a POST request is made, it stores the request body in the database under a collection called "todo".
router.post('/todo', todoController.todo_post);

// Create a route that will return all of the items within a collection.
router.get('/todo', todoController.todo_get);

module.exports = router;
