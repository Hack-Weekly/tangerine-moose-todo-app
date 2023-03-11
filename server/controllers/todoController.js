const { body, validationResult } = require("express-validator");
const db = require("../db/connect.js");
const { ObjectId } = require("mongodb");

// Client access: NOTE - if you want to interact with the database,
// you first need to get a reference to the collection (think of a table in SQL).
// To do this, you have to await the return of calling client.db().collection('todos') and then you can do what you need off the
// collection - see the example below in the POST request handler.
const client = db.getClient();

// post todo's to db
exports.todo_post = [
  // validate & sanatize data
  body("item", "You you need to add an item").isLength({ min: 1 }).trim(),
  async (req, res, next) => {
    // find errors from validation
    try {
      const result = validationResult(req);
      // add date to post
      // req.body.date = new Date();

      console.log(req.body);
      if (!result.isEmpty()) {
        console.log(result.array());
        // if there are any errors, send them back to the client to display to the user.
        res.status(422).json({ errors: result.array() });
      } else {
        // Get access to the collection (basically the same concept as a table in the SQL world).
        let collection = await client.db().collection("todos");
        // Wait to get a result back from inserting the request body content into the collection.
        let response = await collection.insertOne(req.body);
        // Send a response back to the client letting them know that the new entry was added to the db (this should be updated).
        res.send(response).status(204);
      }
    } catch (error) {
      console.log(error);
      // If there's a server error, send it back to the client.
      res.send(error).status(500);
    }
  },
];

// get todo's from db
exports.todo_get = async (req, res, next) => {
  try {
    let collection = await client.db().collection("todos");
    let results = await collection.find({}).toArray();

    // results contains array of todo items from todos collection
    res.send(results).status(200);
  } catch (error) {
    console.log(error);
    // send back server errors to the client
    res.send(error).status(500);
  }
};

exports.todo_complete = async (req, res, next) => {
  // use req.params.id to find the record in the database
  // updated JUST the completed property on that record
  const oID = new ObjectId(req.params.id);
  try {
    let collection = await client.db().collection("todos");
    let results = await collection.findOneAndUpdate(
      { _id: oID },
      { $set: { completed: true } },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log("Updated");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};
