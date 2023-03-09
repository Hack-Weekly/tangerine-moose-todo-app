const { body, validationResult } = require('express-validator');
const db = require('../db/connect.js');

// Client access: NOTE - if you want to interact with the database,
// you first need to get a reference to the collection (think of a table in SQL).
// To do this, you have to await the return of calling client.db().collection('todos') and then you can do what you need off the
// collection - see the example below in the POST request handler.
const client = db.getClient();

// post todo's to db
exports.todo_post = [
  // validate & sanatize data
  body('item', 'You you need to add an item')
    .isLength({ min: 1 })
    .trim()
    .escape(),

  async (req, res, next) => {
    // console.log(req.body);
    // find errors from validation

    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        console.log(result.errors);
        res.send(result.errors).status(400);
      } else {
        // Get access to the collection (basically the same concept as a table in the SQL world).
        let collection = await client.db().collection('todos');
        // Wait to get a result back from inserting the request body content into the collection.
        let response = await collection.insertOne(req.body);
        // Send a response back to the client letting them know that the new entry was added to the db (this should be updated).
        res.send(response).status(204);
      }
    } catch (error) {
      console.log(error);
      res.send(error).status(500);
    }
  },
];

// get todo's from db
exports.todo_get = async (req, res, next) => {
  try {
    let collection = await client.db().collection('todos');
    let results = await collection.find({}).toArray();

    // results contains array of todo items from todos collection
    res.send(results).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
};
