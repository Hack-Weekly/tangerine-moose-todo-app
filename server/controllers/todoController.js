const { body, validationResult } = require("express-validator");
const db = require("../db/connect.js");

const client = db.getClient();

// post todo's to db
exports.todo_post = [
  // validate & sanatize data
  body("item", "You you need to add an item")
    .isLength({ min: 1 })
    .trim()
    .escape(),

  async (req, res, next) => {
    console.log(req.body);
    // find errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return;
    }

    // Get access to the collection (basically the same concept as a table in the SQL world).
    let collection = await client.db().collection("todos");

    // Wait to get a result back from inserting the request body content into the collection.
    let result = await collection.insertOne(req.body);
    // Send a response back to the client letting them know that the new entry was added to the db (this should be updated).
    res.send(result).status(204);
  },
];

// get todo's from db
exports.todo_get = async (req, res, next) => {
  let collection = await client.db().collection("todos");
  let results = await collection.find({}).toArray();

  // results contains array of todo items from todos collection
  res.send(results).status(200);
};
