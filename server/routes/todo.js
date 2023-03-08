const express = require('express');
const db = require('../db/connect.js');

const router = express.Router();
const client = db.getClient();

// Create a route so that when a POST request is made, it stores the request body in the database under a collection called "todo".
router.post('/todo', async (req, res, next) => {
  console.log(req.body);
  // Get access to the collection (basically the same concept as a table in the SQL world).
  let collection = await client.db().collection('todo');

  // TODO: VALIDATE INCOMING REQUEST

  // Wait to get a result back from inserting the request body content into the collection.
  let result = await collection.insertOne(req.body);
  // Send a response back to the client letting them know that the new entry was added to the db (this should be updated).
  res.send(result).status(204);
});

// Create a route that will return all of the items within a collection.
router.get('/todo', async (req, res, next) => {
  // TODO: IMPLEMENT THE REAL ROUTE HANDLER
  console.log(db);
  res.send('Hello!');
});

module.exports = router;
